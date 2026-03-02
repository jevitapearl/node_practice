const  fs = require("fs");
const path = require("path");



const file = __dirname;

fs.promises
.readdir(file)
.then((data) => console.log(data))
.catch((err) => console.log(err));

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.promises
.writeFile(filePath, "This is the initial data. ", "utf-8")
.then(console.log("File created successfully"))
.catch((err)=>console.log(err));

fs.promises
.readFile(filePath, "utf-8")
.then((data) => console.log(data))
.catch((err)=>console.log(err));

fs.promises
.appendFile(filePath, "This is the edited data. ", "utf-8")
.then(console.log("File updated successfully"))
.catch((err)=>console.log(err));

fs.promises
.readFile(filePath, "utf-8")
.then((data) => console.log(data))
.catch((err)=>console.log(err));


fs.promises
.unlink(filePath)
.then(console.log("Deleted successfully!"))
.catch((err)=>console.log(err));