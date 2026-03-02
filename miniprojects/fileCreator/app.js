import readline from "readline";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createFile = () =>{
  rl.question("Enter the file name: ", (name) => {
    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), `${name}.txt`);
    console.log(`${filePath}`);
    fs.writeFile(filePath, "", "utf-8", (error)=>{
      if (error){
        console.log("File creation failed");
      }
    })
    fileInput(filePath, name);
  });
}

const fileInput = (filePath, name) =>{
  rl.question("Enter the text: ", (text) => {
    fs.writeFile(filePath, text, "utf-8", (error)=>{
      if (error){
        console.log("File creation failed");
      }
    });
    console.log(`${name}.txt created successfully.`)
    rl.close();
  });
}

createFile();