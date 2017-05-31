//App that sends anonymous letters using the site as the address
var route = require('./routes/routes');
//https://secret-beyond-26298.herokuapp.com/
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index.hbs',{
    title: "Romanon"
  });
});

app.post('/', setTimeout(route.sendLove),3000);


app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port 3000");
});
