//Filter Method
function findMatching(drivers, userInput){
    //This function takes an array of drivers' names and a string as arguments, 
    //and returns the matching list of drivers. The function should be case insensitive.
    let matchingList = drivers.filter(function(indDrivers){
        return indDrivers.toLowerCase() === userInput.toLowerCase();
    })
    return matchingList
}
function fuzzyMatch(drivers, beginLetters){
    //fuzzyMatch - This function takes an array of drivers' names 
    //and a string as arguments for querying the array, and returns 
    //all drivers whose names begin with the provided letters.
    let matchingName = drivers.filter(function(indDrivers){
        for (let i = 0; i < beginLetters.length; i++){
            if (beginLetters[i] === indDrivers[i]){
                return indDrivers
            }
        }
    })
    return matchingName
}
function matchName(drivers, indName){
    //matchName - This function takes an array of driver objects and a 
    //string as arguments. Each driver object has two properties: name 
    //and hometown. The function should return each element whose name 
    //property matches the provided string argument.
    let objMatchName = drivers.filter(function(objName){
        for (let key in objName){
            if (objName[key] === indName){
                return objName
            }
        }
    })
    return objMatchName
}
