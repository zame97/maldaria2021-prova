'use strict';

import fs from "fs";

fs.readFile('sensors14189-data.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call');