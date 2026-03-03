import fs from "fs";
import path from "path";

const filepath = "C:\\Movies\\Game of Thrones\\S08\\";

try{
  const files = fs.readdirSync(filepath);

  files.forEach(
    (file,index) => {

      const fileExt = path.extname(file);
      const fileName = path.basename(file, fileExt);

      const newName = `Game of Thrones S08 E${(index<9)?("0"+(index+1)):(index+1)}`;

      fs.renameSync(filepath+fileName+fileExt, filepath+newName+fileExt);

    }
  )
}
catch(error){
  console.error(error);
}