const fs  = require('fs');

const data = fs.readFileSync('1-json.json').toString();

let parceData = JSON.parse(data);
parceData.name = "Alexsander";
parceData.age = 28;

let jsonData = JSON.stringify(parceData);
fs.writeFileSync('1-json.json',jsonData);

console.log(parceData);