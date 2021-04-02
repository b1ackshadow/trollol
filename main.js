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
const PORT = 80
server.listen(PORT , () => console.log(`Server running on port ${PORT}`));
