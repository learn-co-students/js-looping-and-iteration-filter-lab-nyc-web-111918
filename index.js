// Code your solution in this file
function findMatching(drivers, name){
  let newArr = [];
  drivers.filter(function(driver) {
    if (driver.toUpperCase() === name.toUpperCase()){
      newArr.push(driver);
    }
  });
  return newArr;
}

function fuzzyMatch(drivers, string){
  let newArr = [];
  drivers.filter(function(driver) {
    let matching = true;
    for (let i = 0; i < string.length; i++){
      // console.log(`${string.charAt(i)} AND ${driver.charAt(i)}`);
      if (driver.charAt(i).toLowerCase() != string.charAt(i).toLowerCase()){
        matching = false;
        console.log(`False ${driver}`)
      }
    }
    if (matching === true) {
      console.log(`True ${driver}`)
      newArr.push(driver);
    }
  });
  return newArr;
}

function matchName(drivers, string){
  let newArr = [];
  drivers.filter(function(driver){
    if (driver.name.toLowerCase() === string.toLowerCase()){
      newArr.push(driver);
    }
  });
  return newArr;
}
