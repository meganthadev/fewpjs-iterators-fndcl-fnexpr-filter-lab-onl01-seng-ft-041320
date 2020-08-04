function findMatching(drivers, str) {
  let matching = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matching
}

function fuzzyMatch(drivers, str) { 
  return drivers.filter( drivers => {
    let matchLetters = drivers.split('').slice(0, str.length)
    matchLetters = matchLetters.join('')
     return matchLetters.toLowerCase() === str.toLowerCase()
  });
}

function matchName(ArrayOfObj, str) {
  return ArrayOfObj.filter( obj => {
    return obj.name === str
  })
}