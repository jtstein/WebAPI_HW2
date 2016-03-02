//Jordan Stein
var express = require('express');
var app = express();
var acceptableRequest = 0;

// GET request
app.get('/gets', function (req, res) {
  console.log("Got a GET request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
  acceptableRequest = 1;
})


// POST request
app.post('/posts', function (req, res) {
  console.log("Got a POST request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
  acceptableRequest = 1;
})

// PUT request
app.put('/puts', function (req, res) {
  console.log("Got a PUTS request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
  acceptableRequest = 1;
});

// DELETE request
app.delete('/deletes', function (req, res) {
  console.log("Got a DELETES request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
  acceptableRequest = 1;
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
  
    if (acceptableRequest == 0) {
        console.log("Example app listening at http://%s:%s", host, port)
    }
    else console.log("The server does not support the HTTP method.");
})