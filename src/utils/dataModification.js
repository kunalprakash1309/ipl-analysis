
// converting the result from csvReader to our desired result
const dataToObject = (results) => {
  // grabbing the csv data header
  const header = results[0]

  // matching each value of each match to csv header.
  const sortedData = results.slice(1, results.length - 1).map((match) => {
    const accum = match.reduce((acc, data, idx) => {
      acc[header[idx]] = data
      return acc
    }, {})
    return accum
  })

  // here we are converting data from Array to Object(also by setting keys to season year)
  // accessing element from Object is faster than array (ie. Hashing) 
  const newMatchData = {}
  
  sortedData.forEach((match) => {
    if (!newMatchData[match.season]){
      newMatchData[match.season] = [match]
    } else {
      newMatchData[match.season].push(match)
    }
  })

  return newMatchData
}

export default dataToObject;