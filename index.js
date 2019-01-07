// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch (drivers, partName) {
  let nameLength = partName.length;
  return drivers.filter(function (name) {
    return name.slice(0, nameLength) === partName;
  });
}
function matchName (drivers, name) {
  return drivers.filter (function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
