const http = require("http");

const PORT = 9000;
const hostname = "127.0.0.5";

const server = http.createServer((req, res) => {
  let { method, url } = req;
  if (method == "GET") {
    if (url == "/") {
      res.write("<h1>HOME PAGE </h1>");
      res.end()
    }
    if (url == "/about") {
      res.end("<h1><marquee>ABOUT PAGE </marquee> </h1>");
    } 
    else {
      res.end("<h1>PAGE NOT FOUND </h1>");
    }
  }
});

server.listen(PORT, hostname, () => {
  console.log("Server is running at port http://" + hostname + ":" + PORT);
});
