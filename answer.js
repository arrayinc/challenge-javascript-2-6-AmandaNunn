const GAL_TO_PINTS = 8;
const PINTS_TO_CUPS = 2;

function gallonsToCups(gallons){
  let pints = gallons * GAL_TO_PINTS;
  let cups = pints * PINTS_TO_CUPS;
  return cups;
}
