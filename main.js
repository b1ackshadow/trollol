const http = require("http");

const requestListener = function (req, res) {
  header = {
    "Content-Type": "text/html; charset=UTF-8",
    "Transfer-Encoding": "chunked",
  };
  res.writeHead(200, header);
  setInterval(() => {
    res.write(" 💩");
  }, 1000);
};

const server = http.createServer(requestListener);
server.listen(8080, () => console.log("Server running on port 80"));
