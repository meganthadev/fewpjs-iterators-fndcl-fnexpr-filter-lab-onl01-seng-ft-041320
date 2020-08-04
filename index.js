function findMatching(drivers, str) {
  let matching = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matching
}

function fuzzyMatch(drivers, str) { 
  return drivers.filter( drivers => {
    let matchedLetters = drivers.split('').slice(0, str.length)
    matchedLetters = matchedLetters.join('')
     return matchedLetters.toLowerCase() === str.toLowerCase()
  });
}

function matchName(ArrayOfObj, str) {
  return ArrayOfObj.filter( obj => {
    return obj.name === str
  })
}