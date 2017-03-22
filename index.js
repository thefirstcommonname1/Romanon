//App that sends anonymous letters using the site as the address
var route = require('./routes/routes');

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get('/', function(req, res) {
  res.send("Hey there!");
});

app.post('/', route.sendLove);


app.listen(3000, function() {
  console.log("Listening on port 3000");
});
