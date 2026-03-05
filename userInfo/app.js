import http from "http";
import { requestHandler } from "./user.js";

const formServer = http.createServer(requestHandler);

formServer.listen(3000, () => console.log("Server live on port 3000"));