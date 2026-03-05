import fs from "fs";

export const requestHandler = (req, res)=>{
  console.log(req.url, req.method);
  if (req.url == "/"){
    res.setHeader("Content-Type", "text/html");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input placeholder='name' name='username'>");
    res.write("<input placeholder='email' name='email'>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    return res.end();
  }
  else if(req.url=="/submit-details" && req.method=="POST"){
    const body = [ ]
    req.on("data", (chunk) =>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on("end", ()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = {};
      for (const [key, value] of params.entries()){
        bodyObject[key] = value;
      }
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
      res.statusCode=302;
      res.setHeader("Location", "/");
      return res.end();
    })
  }
}
