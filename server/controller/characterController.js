module.exports = {
    createCharacter: (req, res) => {
        const db = req.app.get("db");
        console.log(req.body);
        const {fullName, emotions, demeanor, social} = req.body;
        console.log("session object: ", req.session)
        db.createCharacter([fullName, emotions, demeanor, social, req.session.user.id]).then(createdCharacter => {
            console.log("created character: ", createdCharacter)
            res.status(200).send(createdCharacter);
        });

       
    }

}