// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driver){return name.toLowerCase()===driver.toLowerCase();})
}
function fuzzyMatch(drivers, name){
  return drivers.filter(function(driver){return name.toLowerCase()===driver.toLowerCase().slice(0,name.length);})
}
function matchName(drivers, name){
  return drivers.filter(function(driver){return name.toLowerCase()===driver.name.toLowerCase();})
}
