// let cards = [
//         {
//             cardId: 1,
//             gameStep: "a",
//             cardNum: 1,
//             plot: "This is the first step"
//         },
//         {
//             cardId: 2,
//             gameStep: "b",
//             cardNum: 1,
//             plot: "This is the second step"
//         },
//         {
//             cardId: 3,
//             gameStep: "b",
//             cardNum: 2,
//             plot: "This is the second step "
//         },
//         {
//             cardId: 4,
//             gameStep: "c",
//             cardNum: 1,
//             plot: "This is the third step "
//         },
//         {
//             cardId: 5,
//             gameStep: "c",
//             cardNum: 2,
//             plot: "This is the third step "
//         },
//         {
//             cardId: 6,
//             gameStep: "c",
//             cardNum: 3,
//             plot: "This is the third step "
//         },
//         {
//             cardId: 7,
//             gameStep: "c",
//             cardNum: 4,
//             plot: " This is the third step"
//         },
//         {
//             cardId: 8,
//             gameStep: "d",
//             cardNum: 1,
//             plot: " meow"
//         },
//         {
//             cardId: 9,
//             gameStep: "d",
//             cardNum: 2,
//             plot: " meow"
//         },
//         {
//             cardId: 10,
//             gameStep: "d",
//             cardNum: 3,
//             plot: "meow "
//         },
//         {
//             cardId: 11,
//             gameStep: "d",
//             cardNum: 4,
//             plot: " "
//         },
//         {
//             cardId: 12,
//             gameStep: "d",
//             cardNum: 5,
//             plot: " "
//         },
//         {
//             cardId: 13,
//             gameStep: "d",
//             cardNum: 6,
//             plot: " "
//         },
//         {
//             cardId: 14,
//             gameStep: "d",
//             cardNum: 7,
//             plot: " "
//         },
//         {
//             cardId: 15,
//             gameStep: "d",
//             cardNum: 8,
//             plot: " "
//         },
//         {
//             cardId: 16,
//             gameStep: "e",
//             cardNum: 1,
//             plot: " "
//         },
//         {
//             cardId: 17,
//             gameStep: "e",
//             cardNum: 2,
//             plot: " "
//         },
//         {
//             cardId: 18,
//             gameStep: "e",
//             cardNum: 3,
//             plot: " "
//         },
//         {
//             cardId: 19,
//             gameStep: "e",
//             cardNum: 4,
//             plot: " "
//         },
//         {
//             cardId: 20,
//             gameStep: "e",
//             cardNum: 5,
//             plot: " "
//         },
//         {
//             cardId: 21,
//             gameStep: "e",
//             cardNum: 6,
//             plot: " "
//         },
//         {
//             cardId: 22,
//             gameStep: "e",
//             cardNum: 7,
//             plot: " "
//         },
//         {
//             cardId: 23,
//             gameStep: "e",
//             cardNum: 8,
//             plot: " "
//         },
//         {
//             cardId: 24,
//             gameStep: "e",
//             cardNum: 9,
//             plot: " "
//         },
//         {
//             cardId: 25,
//             gameStep: "e",
//             cardNum: 10,
//             plot: " "
//         },
//         {
//             cardId: 26,
//             gameStep: "e",
//             cardNum: 11,
//             plot: " "
//         },
//         {
//             cardId: 27,
//             gameStep: "e",
//             cardNum: 12,
//             plot: " "
//         },
//         {
//             cardId: 28,
//             gameStep: "e",
//             cardNum: 13,
//             plot: " "
//         },
//         {
//             cardId: 29,
//             gameStep: "e",
//             cardNum: 14,
//             plot: " "
//         },
//         {
//             cardId: 30,
//             gameStep: "e",
//             cardNum: 15,
//             plot: " "
//         },
//         {
//             cardId: 31,
//             gameStep: "e",
//             cardNum: 16,
//             plot: " "
//         }
        
//     ];
// let cardId = 32;

// module.exports = {
//     getCards: (req, res, next) => {
//         res.status(200).send(cards);
//     },
//     getOneCard: (req, res) => {
//         let {cardid} = req.params;
//         res.status(300).send(cards[cardid - 1]);
//     }
// }


module.exports = {
    pathway: (req, res) => {
        const db = req.app.get("db");
        // console.log("pathway: ", req.body);
        const {choice} = req.body;
        db.pathway([req.session.user.id, [choice]]).then(thePathway => {
            // console.log("game pathway: ", thePathway);
            res.status(200).send(thePathway);
        })
    },
    pathwaylist: (req, res) => {
        const db = req.app.get("db");
        console.log("pathway history: ", req.body.choice)
        console.log("session information: ", req.session.user.id);
        
        db.getHistory([req.session.user.id]).then(response => { 
            console.log("before push: ",response)
            response[0].history.push(req.body.choice);
            console.log("after push: ",response[0]);
            db.updatePathway([response[0].history, req.session.user.id])
            // must res.status(200).send(the correct thing) or else you'll dun goof silly
            // to trigger front end .then
            res.status(200).send(response);
        })
    },

    finishGame: (req, res) => {
        const db = req.app.get("db");
        console.log("pathway history: ", req.body.choice)
        console.log("session information: ", req.session.user.id);
        
        db.getHistory([req.session.user.id]).then(response => { 
            console.log("before push: ",response)
            response[0].history.push(req.body.choice);
            console.log("after push: ",response[0]);
            db.finishGame([response[0].history, req.session.user.id])
            // must res.status(200).send(the correct thing) or else you'll dun goof silly
            // to trigger front end .then
            res.status(200).send(response);
        })
    },

    getPathwaylist: (req, res) => {
        const db = req.app.get("db");
        db.getAllHistory([req.session.user.id]).then(response => {
            res.status(200).send(response);
        })
    },
    deleteGame: (req, res, next) => {
        const db = req.app.get("db");
        console.log('delete req.body: ', req.body, "req.session.user.id", req.session.user.id, "req.session", req.session)
        // db.getHistory([req.session.user.id]).then(response => {
        //     console.log("response: ", response);
            db.deleteTheGame([req.params.id, req.session.user.id]).then(theResponse => {
                console.log('theResponse: ', theResponse);
                res.status(200).send(theResponse);
            })
    //    })
        
    }
}