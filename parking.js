let parseTheFiles = require('./parse.js');
let parsedData = parseTheFiles('./simple_data/parking_feb_2016.csv');

let tickettypes = {};

// Removed Header row
parsedData.splice(0, 1);
//Looped over the array
parsedData.forEach(function findParkingViolations(violation) {
    if (tickettypes[violation[9]] === undefined ){
        tickettypes[violation[9]] = 1;
    } else {
      tickettypes[violation[9]] += 1;
    }
} );

console.log('Ticket type:', tickettypes);

function printAllTheThings(object) {
  let properties = Object.keys(object).length;
  return properties;
}

console.log(printAllTheThings(tickettypes));

// How many different types of parking tickets were issued?
console.log('There are ' + printAllTheThings(tickettypes) + ' different types of parking tickets issued.');


// how can i go through each property in tickettypes, and hold onto the largest value and print it out

let ticketTypeKeys = Object.keys(tickettypes);
console.log(ticketTypeKeys);

let maxValue = 0;
let maxValueTicket;

ticketTypeKeys.forEach(function findTheHighestValue(object) {
  if (tickettypes[object] > maxValue) {
    maxValue = (tickettypes[object]);
    maxValueTicket = object;
  }
});
console.log(maxValueTicket);
console.log(maxValue);
