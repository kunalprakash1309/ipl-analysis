import Data from '../assests/matches.csv'

const fetchData = async () => {
  const response = await fetch(Data)
  const data = await response.blob()
  const result = await data.text()

  return result
}

export default fetchData