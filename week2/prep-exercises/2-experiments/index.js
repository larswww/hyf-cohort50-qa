"use strict";
 const {getRandomIntWithMax} = require("./util");

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    const diceNumber = getRandomIntWithMax(6);
    valueCounts[diceNumber-1]++;
  }

  const results = [];

  for (const valueCount of valueCounts) {
    const factor = (valueCount / sampleSize) * 100;
    const percentageString = factor.toFixed(2);
    results.push(percentageString)
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const sample of sampleSizes) {
    const experimentRun = runExperiment(sample)
    console.log(experimentRun, sample)
  }

  // Write a for..of loop that calls the `runExperiment()` function for each
  // value of the `sampleSizes` array.
  // Log the results of each experiment as well as the experiment size to the
  // console.
  // The expected output could look like this:
  //
  // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
  // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
  // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000
}

main();
