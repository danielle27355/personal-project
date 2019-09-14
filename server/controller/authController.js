const bcrypt = require('bcryptjs');

module.exports = {
    signup: (req, res) => {
        const db = req.app.get("db");
        console.log(req.body);
        const {userName, password, fullName, email} = req.body;
       
        db.findUser(userName).then(user => {
            if(user.length){
                res.status(200).send("User already exists");
            }else{
                let saltRounds = 12;
                bcrypt.genSalt(saltRounds).then(salt=>{
                    bcrypt.hash(password, salt).then(hashedPassword => {
                        db.createUser([userName, hashedPassword, fullName, email]).then(user => {
                            console.log(user);
                            req.session.user = {
                                id: user[0].id,
                                username: user[0].username,
                                fullName: user[0].fullname
                            }
                            res.status(200).send(req.session.user);
                        })
                    })
                })

            }
        })
    },
    login: (req, res) => {
        const db = req.app.get("db");
        console.log("login", req.body);
        const {userName, password} = req.body;
        db.findUser(userName).then(user => {
            console.log(user)
            let result = bcrypt.compare(password, user[0].password)
            if(user[0]){
                if(result){
                    req.session.user = {
                        id: user[0].id,
                        username: user[0].username,
                        fullname: user[0].fullname
                    }
                res.status(200).send(req.session.user);
                }else{
                    res.status(401).send("Password does not match.");
                }
            }else{
                res.status(999).send("That usernames does not exist, please sign up to continue.")
            }
        })
    }
}