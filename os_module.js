const os = require("os");

console.log("Platform:", os.platform());
console.log("Use:", os.userInfo());
console.log("CPU Arch:", os.arch());
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem(), "bytes");
console.log("System uptime:", os.uptime());
console.log("Home dir:", os.homedir());
console.log("Host:", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Temp dir:", os.tmpdir());
console.log("OS:", os.type());
console.log("CPU info:", os.cpus());