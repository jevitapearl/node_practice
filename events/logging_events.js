const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const emitter = new EventEmitter();

const fileName = "logs.txt";
const filePath = path.join(__dirname, fileName)

const fileContent = fs.readFileSync(filePath)

const logs = JSON.parse(fileContent);


emitter.on("user-login", (username)=>{
  logs["user-login"]++;
  console.log(`${username} logged in successfully!`);
});

emitter.on("user-logout", (username)=>{
  logs["user-logout"]++;
  console.log(`${username} logged out successfully!`);
});

emitter.on("user-purchase", (username, item)=>{
  logs["user-purchase"]++;
  console.log(`${username} purchased ${item}`);
});

emitter.on("user-update", (username, field)=>{
  logs["user-update"]++;
  console.log(`${username} updated ${field} successfully`);
});

emitter.emit("user-login", "J");
emitter.emit("user-logout", "J");
emitter.emit("user-purchase", "J", "headphones");
emitter.emit("user-update", "J", "number");

console.log(logs);

fs.writeFileSync(filePath, JSON.stringify(logs));
console.log(JSON.stringify(logs));