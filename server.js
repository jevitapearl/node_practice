const http = require("http");

const server = http.createServer((request, response) =>  {
  if (request.url === "/"){
    response.write("Hello welcome to this website on port 3000.");
    response.end();
  }

  if (request.url === "/source-code"){
    response.setHeader("Content-Type", "text/plain")
    response.write("Hello welcome to this source code on port 3000");
    response.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT 3000`);
});

