// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver){
    return driver[0].toLowerCase() === letters[0].toLowerCase();
  });
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name;
  });
}
