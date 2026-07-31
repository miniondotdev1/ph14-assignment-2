function isElevatorSafe(weights) {
    let sum = 0;
    for(let i =0; i< weights.length; i++){
        let weight = weights[i]
        sum += weight;
    }
    
    if(!Array.isArray(weights)){
        return "Invalid"
    }
    else if (sum <= 400){
        return true;
    }
    else{
        return false;
    }
}

console.log(isElevatorSafe([60,75,50]))
console.log(isElevatorSafe([90,100,95,120]))
console.log(isElevatorSafe([400]))
console.log(isElevatorSafe("60,75,50"))
console.log(isElevatorSafe([]))
console.log(isElevatorSafe({"weight":60}))

