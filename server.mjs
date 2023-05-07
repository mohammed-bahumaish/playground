import { createServer } from "http";

createServer((_req, res) => {
  res.writeHead(200);
  res.end("Hello world");
}).listen(process.env.PORT || 3000);
