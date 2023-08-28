const http = require("http");
const { join } = require("path");

const { readFileSync } = require("fs");

const PORT = 6060;
const hostname = "127.0.0.4";

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method == "GET") {
    if (url == "/") {
      let data = readFileSync(join(__dirname, "public", "index.html"), "utf-8");
      res.write(data);
    }

    if (url == "/CSS/index.css") {
      let data = readFileSync(join(__dirname, "public", "CSS", "index.css"),"utf-8");
      res.write(data);
    }

    if (url == "/about") {
        let data = readFileSync(join(__dirname, "public", "Pages", "about.html"),"utf-8");
        res.write(data);
      }

      if (url == "/contact") {
        let data = readFileSync(join(__dirname, "public", "Pages", "Contactus.html"),"utf-8");
        res.write(data);
      }
     
      else {
        // res.write("<h1> PAGE NOT FOUND</h1>")
      }   

  }

  res.end();
});

server.listen(PORT, hostname, () => {
  console.log(`Server Started at http://${hostname}:${PORT}`);
});
