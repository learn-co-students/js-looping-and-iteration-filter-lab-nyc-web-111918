// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  let i = string.length
  return array.filter(function (driverName) {
    return driverName.substr(0, i) === string;
  });
}

function matchName(array, string) {
  return array.filter(function (driver) {
    return driver.name === string;
  });
}
