//var http = require('http');
//console.log(http);

// TODO; create a basic server with express
// that will send back index.html file on a GET request to '/'
// it should then send back jsonData on a Get to /data/json

const express = require("express");
const app = express();
const PORT = 3001;
const data = { count: 12, message: "hey" };

app.get('/', (req, res) => {
  res.send("welcome to my page");
});

app.get('/data', (req, res) => {
  res.json(data);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// var jasonData = { count: 12, message: "hey" };
// const port = 3000;

// app.get("/", function (req, res) {
//   fs.readFile("index.html", function (err, buffer) {
//     var html = buffer.toString();
//     res.setHeader("Content-Type", "text/html");
//     res.send();
//   });
// });

// // app.get('/', function(req, res) {
// //     res.sendFile(__dirname + '/index.html', function(err) {
// //         if (err) {
// //             res.status(500).send(err)
// //         }
// //     })
// // });

// app.get("/data", function (req, res) {
//   res.json(jasonData);
// });

// // app.listen(port, function () {
// //   console.log('listening on http://localhost:', port);
// // });
