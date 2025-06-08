# Code-Challenge-1# Week 1 Code Challenge

## Overview
This repository contains solutions for the Week 1 Code Challenge, where we implement JavaScript functions to solve practical problems related to daily life in Kenya. The challenges include calculating ingredients for Kenyan chai, estimating boda boda fare, and determining mobile money transaction fees.

## Repository Structure
Each challenge is placed in a separate folder within this repository:
- `chaiCalculator/` - Contains the solution for the Chai Bora Ingredient Calculator.
- `bodaFareCalculator/` - Houses the Boda Boda Fare Estimator.
- `mobileMoneyEstimator/` - Includes the Mobile Money Transaction Fee Estimator.

Each folder contains a single JavaScript file:
- `chai.js` - Calculates chai ingredients.
- `fare.js` - Computes boda boda ride fare.
- `fee.js` - Estimates mobile money transaction fees.

## Challenges & Solutions

### Challenge 1: Chai Bora Ingredient Calculator ☕
This challenge helps determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

#### Standard Recipe for 1 Cup of Chai:
- Water: 200 ml
- Milk: 50 ml
- Tea Leaves: 1 tablespoon
- Sugar: 2 teaspoons (optional but included)

#### Function Implementation:
The function `calculateChaiIngredients`:
1. Prompts the user to enter the number of chai cups they want to make.
2. Converts the input to a number.
3. Calculates the required amount for each ingredient.
4. Prints the results in a user-friendly format.

### Challenge 2: Boda Boda Ride Fare Estimator 🛵
This program estimates the fare for a boda boda ride based on a base fare and a per-kilometer charge.

#### Fare Calculation:
- Base Fare: KES 50 (applies to every ride)
- Per Kilometer Charge: KES 15 per kilometer traveled

#### Function Implementation:
The function `calculateBodaFare`:
1. Prompts the user to enter the distance of their trip.
2. Converts the input to a number.
3. Computes the total fare.
4. Prints the result in a friendly format.
