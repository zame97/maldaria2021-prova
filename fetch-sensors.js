'use strict';
import fetch from "node-fetch";
import fs from "fs";


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  /*
  fetch("https://api.sensor.community/airrohr/v1/sensor/26273/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

     
    let data = JSON.stringify(result);
    fs.writeFileSync('student-2.json', data);
*/


    let dataset1; 
    Promise.all([22871].map(id =>
        fetch(`https://api.sensor.community/airrohr/v1/sensor/${id}/`) 
    .then(response => response.json()) 
    .then(data => {
 	dataset1 = data;
        logDataset1(); 
    })));

    async function logDataset1 () { 
        let data = JSON.stringify(dataset1, null, 2);
        fs.writeFileSync('sensors22871-data.json', data);
    }
    

    let dataset2; 
    Promise.all([35715].map(id =>
        fetch(`https://api.sensor.community/airrohr/v1/sensor/${id}/`) 
    .then(response => response.json()) 
    .then(data => {
 	dataset2 = data;
        logDataset2(); 
    })));

    async function logDataset2 () { 
        let data = JSON.stringify(dataset2, null, 2);
        fs.writeFileSync('sensors35715-data.json', data);
    }

