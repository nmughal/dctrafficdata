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
console.log('There were ' + printAllTheThings(tickettypes) + ' different types of parking tickets issued.');

let ticketTypeKeys = Object.keys(tickettypes);
// console.log(ticketTypeKeys);

let maxValue = 0;
let maxValueTicket;

ticketTypeKeys.forEach(function findTheHighestValue(object) {
  if (tickettypes[object] > maxValue) {
    maxValue = (tickettypes[object]);
    maxValueTicket = object;
  }
});
// console.log(maxValueTicket);

// What was the most common violation type for a parking ticket?
console.log('The most common violation type for a parking ticket was ' + maxValueTicket + '.');



let statelicense = {};

parsedData.forEach(function findStateLicense(tickets) {
    if (statelicense[tickets[12]] === undefined ){
        statelicense[tickets[12]] = 1;
    } else {
      statelicense[tickets[12]] += 1;
    }
} );

console.log('Ticket type:', statelicense);


function printAllTheThings(licenseObject) {
  let licenseProperties = Object.keys(licenseObject).length;
  return licenseProperties;
}

// How many different types of state license plates
console.log(printAllTheThings(statelicense));


let licenseTypeKeys = Object.keys(statelicense);
console.log(licenseTypeKeys);

let maxLicenseValue = 0;
let maxLicenseValueTicket;

licenseTypeKeys.forEach(function findTheHighestValue(licenseObject) {
  if (statelicense[licenseObject] > maxValue) {
    maxLicenseValue = (statelicense[licenseObject]);
    maxLicenseValueTicket = licenseObject;
  }
});
console.log(maxLicenseValueTicket);

//What state license plate gets the most tickets?
console.log(maxLicenseValueTicket + ' state license plates get the most tickets. ');
