function findMatching(list, string){
  return list.filter(function(name){
    return name.toUpperCase() === string.toUpperCase();
  })
}


function fuzzyMatch(list, string){
  return list.filter(function(name){
    return name.startsWith(string);
  })
}

function matchName(list, string){
  return list.filter(function(name){
    return name.name === string
  })
}
