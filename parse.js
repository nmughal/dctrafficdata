let filesystem = require('fs');

module.exports = function parseTheFiles(csvFile) {
  let contentsOfTheFile = filesystem.readFileSync(csvFile);
  let stringValue = contentsOfTheFile.toString();
  let rows = stringValue.split('\n');
  let parsedRows = [];

  rows.forEach(function printRows(row) {
    let dataRow = row.split(',');
    if (row !== '') {
      parsedRows.push(dataRow);
    }

  });
  return parsedRows;
};
