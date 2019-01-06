// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function (word) { return word.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.startsWith(string, 0)
  })
}

function matchName(drivers, string) {
  return drivers.filter (function(driver) {
    return driver['name'] === string
  })
}
