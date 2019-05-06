
module.exports = {
    takeNum: (req, res) => {

        //from Twilio documentation
  const accountSid = 'AC3f32cae5d7a6e41545db8e90dce758c0';
  const authToken = '3a3aada88586c009ff950bc7a19758a5';
  const client = require('twilio')(accountSid, authToken);
  const {cellNumber} = req.body

  client.messages
    .create({
      body: "Steeeeeeeeeeve",
      from: '+19893416601',
      to: cellNumber
    })
    .then(message => console.log(message.sid));

        console.log("phone number: ", req.body, "FINAL", cellNumber);
        res.status(200).send(req.body)
    }

}