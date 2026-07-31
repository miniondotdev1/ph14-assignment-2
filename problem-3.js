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

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
console.log(calculateAiCost(599));
console.log(calculateAiCost(700));
