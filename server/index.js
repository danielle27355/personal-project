const session = require("express-session");
const bcrypt = require("bcryptjs");
const express = require('express');
const massive = require('massive');
const gc = require("./controller/gameController.js");
const cc = require("./controller/characterController.js");
require("dotenv").config();
const ac = require("../server/controller/authController.js")
const app = express();

app.use(express.json());

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


app.route("/auth/signup").post(ac.signup);
app.route("/auth/login").post(ac.login);




app.listen(SERVER_PORT, () => {console.log(`listening on port ${SERVER_PORT}`)})