const fs = require("fs");

const fileName = "test.txt";
fs.writeFileSync(fileName, "Initial data", "utf-8");


console.log(fs.readFileSync(fileName, "utf-8"));