const http = require("http");
let PORT = 5000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  // res.write("<h1>HELLO </h1>")
  // res.end()

  res.end("<h1>HELLO </h1>");
});

server.listen(PORT, hostname, () => {
  console.log("Server is running at port http://" + hostname + ":" + PORT);
});
 