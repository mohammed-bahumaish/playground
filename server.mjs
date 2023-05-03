import { createServer } from "http";

createServer((res) => {
  res.write("Hello World!");
  res.end();
}).listen(process.env.PORT);
