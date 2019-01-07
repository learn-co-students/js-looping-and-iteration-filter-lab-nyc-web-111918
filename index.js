// Code your solution in this file
function findMatching(array, name) {
  return array.filter(element => element.toLowerCase() === name.toLowerCase())
};

function fuzzyMatch(array, letters) {
  return array.filter(element => element.slice(0, letters.length) === letters)
};

function matchName(array, name){
  return array.filter(element => element.name === name)
};
