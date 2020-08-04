function findMatchingDrivers(drivers, str) {
  let matching = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matching
}