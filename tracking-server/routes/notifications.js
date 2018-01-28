const express = require('express');
const router = express.Router();

/*const accountSid = 'PN80214578fe53960aaff7f9f858aab090';
const authToken = 'c3fb3338f45af97d880329e91d40ad48';
const twilioPhone = "+14387956471";

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);*/

/* GET users listing. */
router.get('/notify/:phone', function(req, res, next) {

	/*client.messages.create({
	    to: `+1${phone}`,
	    from: twilioPhone,
	    body: 'This is a test for testing purpose.',
	  },
	  (err, message) => {
	    console.log(message.sid);
	  }
	);*/
  res.send('Notification Sent!');
});

module.exports = router;
