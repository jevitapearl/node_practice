const fs = require("fs");
const path = require("path");


const fileName = "text2.txt";
const filepath = path.join(__dirname, fileName);

fs.writeFile(filepath, "This is the initial data", "utf-8",
  (err) => {
    if (err)console.log(err);
  }
)