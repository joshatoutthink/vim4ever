const http = require("http");
const Websocket = require("ws");
const fs = require("fs");

const wss = new Websocket.Server({ port: 7878 });
wss.on("connection", listForEvents);

const requestListener = function (req, res) {
  res.writeHead(200);

  console.log("got a request");
  let content = "";
  req.on("data", function (chunk) {
    content += chunk;
  });

  req.on("end", function () {
    console.log(content);
    wss.clients.forEach(function each(client) {
      if (client.readyState === Websocket.OPEN) {
        client.send(content);
      }
    });
    res.end("thanks");
  });
};

const server = http.createServer(requestListener);
server.listen(8082);

function listForEvents(ws) {
  console.log("New connection");
  ws.send("Hello");
  ws.on("message", function incoming(message) {
    console.log("message: %s", message);
    ws.send("hello to you");
  });
}
