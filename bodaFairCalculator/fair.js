// Function to calculate boda boda fare based on distance
function calculateBodaFare(distanceInKm) {
  // Constants
  const baseFare = 50;       // Fixed base fare (KES)
  const chargePerKm = 15;    // Fare per kilometer (KES)

  // Calculate fare components
  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  // Output the fare details
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki! ");
}

// Prompt user for distance input
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

// Convert input to a number
const distanceInKm = parseFloat(userInput);

// Input validation
if (isNaN(distanceInKm) || distanceInKm <= 0) {
  console.log("Tafadhali weka umbali halali kwa kilomita. ");
} else {
  calculateBodaFare(distanceInKm);
}