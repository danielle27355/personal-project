//from Twilio documentation
  const accountSid = 'AC3f32cae5d7a6e41545db8e90dce758c0';
  const authToken = '3a3aada88586c009ff950bc7a19758a5';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: "Here's the cheatz",
      from: '+19893416601',
      to: '+19894930348'
    })
    .then(message => console.log(message.sid));