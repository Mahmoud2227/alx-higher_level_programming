#!/usr/bin/node
const fs = require('fs');
fs.readFile(process.argv[2], { encoding: 'utf-8' }, (error, data) => {
  if (error) console.log(error);
  console.log(data);
});
