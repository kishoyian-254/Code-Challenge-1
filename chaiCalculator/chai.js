// Function to calculate ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
  // Ingredient quantities per 1 cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50;   // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;   // in teaspoons

  // Calculate total ingredients
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Output the result
  console.log(`\nTo make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
  console.log("\nEnjoy your Chai Bora! ☕️");
}

// Ask user for number of cups
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

// Convert input to number
const numberOfCups = parseInt(userInput);

// Validate input and call the function
if (isNaN(numberOfCups) || numberOfCups <= 0) {
  console.log("Please enter a valid number of cups");
} else {
  calculateChaiIngredients(numberOfCups);
}