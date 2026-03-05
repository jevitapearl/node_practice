import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const APIKey = "d783f07f549095f3381a1824";
const url = `https://v6.exchangerate-api.com/v6/${APIKey}/latest/USD`;

https.get(url, (response)=>{
  let data = ""
  response.on("data", (chunk)=>{
    data += chunk;
  });

  response.on("end", ()=>{
    const rates = JSON.parse(data).conversion_rates;
    rl.question("Enter the amount in USD: ", (amount)=>{
      
    })

    amount = 200;
  });

  
  console.log(response);
})