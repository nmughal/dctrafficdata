let filesystem = require('fs');

  let contentsOfTheFile = filesystem.readFileSync('./simple_data/moving_jan_2016.csv');
  let stringValue = contentsOfTheFile.toString();
  let rows = stringValue.split('\n');
  let parsedRows = [];

  rows.forEach(function printRows(row) {
    let dataRow = row.split(',');
    parsedRows.push(dataRow);

});

console.log(parsedRows[1][0]);
