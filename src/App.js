import { useEffect, useState } from 'react';
import { usePapaParse } from 'react-papaparse';
import './App.css';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import fetchData from './utils/fetchData.utils';
import dataToObject from './utils/dataModification';


const App = () => {

  // for converting csv to json array
  const { readString } = usePapaParse()

  const [matchData, setMatchData] = useState(null)
  const [season, setSeason] = useState("2017")

  
  const getMatchesData = async () => {
    const csvString = await fetchData()

    const { data } = readString(csvString)

    // passing data to modify the data into our favourable structure
    const finalResult = dataToObject(data)

    // matchData = our required structure of data
    setMatchData(finalResult)
    
  }

  // run the code inside useEffect when the app mount first
  useEffect(() => {
    getMatchesData()
  }, [])

  return (
    <>
      <NavigationBar season={season} setSeason={setSeason}/>
      <Home matchData={matchData} season={season} setSeason={setSeason}/>
    </>
  )
}

export default App;
