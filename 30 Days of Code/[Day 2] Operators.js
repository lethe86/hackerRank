    // Write your code here
    let tip, tax, total;
    tip = mealCost * (tipPercent / 100);
    tax = mealCost * (taxPercent / 100);
    total = mealCost + tip + tax;

    // Use console.log() to print to stdout
    console.log("The total meal cost is " + Math.round(total) + " dollars.");