// What is the average fine amount?
// What was the total income from photo citations (tickettype = "Photo")?
// What was the total income from all moving violations?

let parseTheFiles = require('./parse.js');
let parsedData = parseTheFiles('./simple_data/moving_jan_2016.csv');

let movingViolations = {};

parsedData.splice(0, 1);
parsedData.forEach(function findMovingViolations(violation) {
    if (movingViolations[violation[17]] === undefined ){
        movingViolations[violation[17]] = 1;
    } else {
      movingViolations[violation[17]] += 1;
    }
} );

console.log('Ticket type:', movingViolations);

let maxValue = 0;
let maxValueTicket;
let movingViolationsKeys = Object.keys(movingViolations);

movingViolationsKeys.forEach(function findTheHighestValue(object) {
  if (movingViolations[object] > maxValue) {
    maxValue = (movingViolations[object]);
    maxValueTicket = object;
  }
});
// console.log(maxValueTicket);

// What was the most common violation type for a moving violation?
console.log('The most common violation type for a moving violation ticket was ' + maxValueTicket + '.');


// What is the average fine amount?

let fineAmountarr = [];
parsedData.forEach(function printOut(fineAmount) {
  console.log(fineAmount[10]);
});

let total = 0;
for (let i = 0; i < fineAmountarr.length; i++) {
  total += fineAmount[i];
}
let avg = total / fineAmountarr.length;

console.log(fineAmount);
