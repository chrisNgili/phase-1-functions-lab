// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let hqLocation = 42 
    if(someValue>=hqLocation){
        return someValue-hqLocation
    }
    else if (someValue<=hqLocation){
        return hqLocation-someValue
    }
}

function distanceFromHqInFeet(someValue){
    const blocks=distanceFromHqInBlocks(someValue);
    return blocks*264
}
function distanceTravelledInFeet(start, destination){
    if (start<=destination){
    return (destination-start)*264}
    else if(start>=destination){
        return (start-destination)*264
    }
}
function calculatesFarePrice(start, destination){

    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){return 0}
    else if (distance > 400 && distance <= 2000){
    return (distance-400)*0.02}
    else if (distance > 2000 && distance <= 2500){
        return 25 
    }
    else if (distance >2500){
        return "cannot travel that far"
    }
}
