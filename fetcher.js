const request = require('request');

const fs = require('fs');
const input = process.argv.slice(2);
const web = input[0];
const path = input[1];
const output = undefined;
// console.log(web, outputFile)

request(web, (error, response, body) => {
  fs.access(path, fs.F_OK, (err) => {
    if (error || response.statusCode !== 200) {
      console.log('Error:', error);
    } else if (err) {
      console.log('File path does not exist!');
    } else {
      fs.writeFile(path, body, 'utf8', function (err, data) {
        console.log('saved!');
      });
    }
  });
});
