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


console.log(topRatedRestaurant([{"name":"Chillox","rating":4.5},{"name":"Sultan's Dine","rating":4.8}]))
console.log(topRatedRestaurant([{"name":"KFC","rating":4.2},{"name":"Pizza Hut","rating":4.6}]))
console.log(topRatedRestaurant([]))
console.log(topRatedRestaurant("restaurants"))
console.log(topRatedRestaurant([{"name":"Burger King","rating":3.9}]))