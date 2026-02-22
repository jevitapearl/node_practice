const fs = require("fs");
const path = require("path");

const filepath = "C:\\Movies\\How I Met Your Mother\\How I Met Your Mother S09\\";

try{
  const files = fs.readdirSync(filepath);

  files.forEach(
    (file,index) => {

      const fileExt = path.extname(file);
      const fileName = path.basename(file, fileExt);

      const newName = `How I Met Your Mother S09 E${(index<9)?("0"+(index+1)):(index+1)}`;

      fs.renameSync(filepath+fileName+fileExt, filepath+newName+fileExt);

    }
  )
}
catch(error){
  console.error(error);
}