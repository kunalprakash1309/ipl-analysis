import { useCallback, useEffect, useState } from 'react';
import { usePapaParse } from 'react-papaparse';
import './App.css';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import fetchData from './utils/fetchData.utils';


const App = () => {

  const { readString } = usePapaParse()

  const [matchData, setMatchData] = useState([])
  const [season, setSeason] = useState("2017")

  const dataToObject = (results) => {
    const header = results[0]
    const sortedData = results.slice(1, results.length -1).map((match) => {
      const accum = match.reduce((acc, data, idx) => {
        acc[header[idx]] = data
        return acc
      }, {})
      return accum
    })
    setMatchData(sortedData)
  }
  
  const getMatchesData = async () => {
    const data = await fetchData()

    readString(data, {
      worker: true,
      complete: (results) => {
        dataToObject(results.data)
      }
    })
  }

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
