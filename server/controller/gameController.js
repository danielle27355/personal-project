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