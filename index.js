// Code your solution here
function findMatching(drivers, userInput){
    let matchingList = drivers.filter(function(userInput){
        return drivers === userInput;
    })
    return matchingList
}
function fuzzyMatch(drivers, beginLetters){
    //if the beginning letters are equal to beginning letters of drivers
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
    let objMatchName = drivers.filter(function(objName){
        for (let key in objName){
            if (objName[key] === indName){
                return objName
            }
        }
    })
    return objMatchName
}
