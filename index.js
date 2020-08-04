function findMatching(drivers, str) {
  let matching = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matching
}

function fuzzyMatch(drivers, str) { 
  return driver.filter( driver => {
    let matchLetters = driver.split('').slice(0, string.length)
    matchLetters = matchLetters.join('')
     return matchLetters.toLowerCase() === string.toLowerCase()
  });
}