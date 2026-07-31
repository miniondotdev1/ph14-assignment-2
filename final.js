//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invalid"
  }
  else if(teamAGoals > teamBGoals){
    return "Team A Won";
  }
  else if(teamAGoals < teamBGoals){
    return "Team B Won";
  }
  else return "Draw";
}

//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  } else if (tokensUsed <= 500) {
    return 0;
  } else {
    let overUsedToken = tokensUsed - 500;
    let dividedToken = overUsedToken / 100;
    let totalCost = Math.floor(dividedToken) * 5;
    return totalCost
  }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid";
    }
    else{

        let bestRestaurant = restaurants[0]
        for(let i = 0; i < restaurants.length; i++){
            let objRestaurants = restaurants[i]
            if(objRestaurants.rating > bestRestaurant.rating){
                bestRestaurant = objRestaurants;
            }
        }
        let restaurantName = bestRestaurant.name;
        return restaurantName.toUpperCase();
    }
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  } 
  else if (times.length === 0) {
    return "Invalid";
  } 
  else {
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid"
        }
      total = total + times[i];
    }

    return total / times.length;
  }
}

