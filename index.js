// Code your solution in this file
function findMatching(drivers, string){
  const select = drivers.filter(function (driver) {return string.toLowerCase() === driver.toLowerCase();});
  return select;
}

function fuzzyMatch(drivers, string) {
  const select = drivers.filter(function (driver) {return driver.indexOf(string) === 0})
  return select;
  }

function matchName(drivers, string) {
  const solution = [];
  for (const driver of drivers) {
    if (driver["name"] === string){
      solution.push(driver)
    }
  }
  return solution;
}
