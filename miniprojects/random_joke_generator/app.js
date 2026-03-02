import https from "https";
import chalk from "chalk";

const getJoke = () =>{
  const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";

  https.get(url, (response)=>{
    let data = "";
    response.on("data", (chunk)=>{
      data += chunk;
    });

    response.on("end", () =>{
      const joke = JSON.parse(data);
      console.log("Here is a joke.");
      console.log(chalk.magenta(joke.setup));
      console.log(chalk.bgMagenta(joke.delivery));
    });
  })
}

getJoke();