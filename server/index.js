const session = require("express-session");
const bcrypt = require("bcryptjs");
const express = require('express');
const massive = require('massive');
const gc = require("./controller/gameController.js");
const cc = require("./controller/characterController.js");
require("dotenv").config();
const ac = require("../server/controller/authController.js")
const ic = require("./controller/infoController.js")
const app = express();
// var cloudinary = require('cloudinary').v2;

app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

function sessionCheck(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(401).send("you must login");
    }
  }

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(db => {app.set('db', db);
console.log("db conntected");})

app.use(session({
    resave:true,
    saveUnintialized: false,
    secret: SESSION_SECRET
}))

// app.use(sessionCheck);

//endpoints
//get individual game card
// app.get("/api/gamesteps/", gc.getCards)
// app.get("/api/gamesteps/:cardid", gc.getOneCard)

//Post
app.route("/auth/signup").post(ac.signup);
app.route("/auth/login").post(ac.login);
app.route("/character").post(cc.createCharacter); 

//Read
// app.route("/pathwaylist").get(gc.pathwaylist);

//Put
app.route("/pathway").put(gc.pathway);
app.route("/pathwaylist").put(gc.pathwaylist).get(gc.getPathwaylist);
app.route("/pathwaylist/finished").put(gc.finishGame).get(gc.getPathwaylist);
// app.route("/gamelist").put(gc.gamelist);

//Delete
app.route("/pathwaylist:id").delete(gc.deleteGame);


app.post("/stripe", (req,res) => {
  const stripeToken = req.body;
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
  console.log(stripeToken)
  stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: 'Example Charge',
      source: stripeToken.body
    }, function(err, charge) {
        console.log('charge', charge)
        if(err){
          res.send({
              success: false,
              message: 'Error'
          })
        } else {
          res.send({
          success: true,
          message: 'Success'
       })
        }
    });
})


// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});


  app.route('/phoneNumber').post(ic.takeNum);

  // const path = require('path')
  // app.get('*', (req, res)=>{
  //   res.sendFile(path.join(__dirname, '../build/index.html'));
  // })

app.listen(SERVER_PORT, () => {console.log(`listening on port ${SERVER_PORT}`)})