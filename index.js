function findMatching(drivers, str) {
  let matching = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matching
}

function fuzzyMatch(driver, str) { 
  return driver.filter( driver => {
    let matchLetters = driver.split('').slice(0, str.length)
    matchLetters = matchLetters.join('')
     return matchLetters.toLowerCase() === str.toLowerCase()
  });
}

function matchName(ArrayOfObj, str) {
  return ArrayOfObj.filter( obj => {
    return obj.name === str
  })
}