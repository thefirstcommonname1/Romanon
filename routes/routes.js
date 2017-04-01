var accountSid = 'ACfee6b284e3aa96a32d46a146e7fd0653';
var authToken = 'b53068f632c663091f55f1670b82791a';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports.sendLove = function(req, res) {
  var number = req.body.number;
  var messages = req.body.messages;
  console.log(req.body.number);
  client.messages.create({
      to: "+1" + number,
      from: "+17034578742",
      body: messages,
  }, function(err, message) {
    if (err) {
      return console.log(err);
    }
      console.log(message.sid);
  });
};
