const path = require("path");

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder", "students", "data.txt");
console.log(filepath);


const parseData = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extName = path.extname(filepath);
const baseName = path.basename(filepath);
const dirName = path.dirname(filepath);
const seperator = path.sep;



console.log({
  parseData,
  resolvedPath,
  extName,
  baseName,
  dirName,
  seperator
})