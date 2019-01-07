// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter( function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, string) {
  let nameLetters = string.length;
  return drivers.filter( function(driverName) {
    return driverName.slice(0, nameLetters) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter( function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
