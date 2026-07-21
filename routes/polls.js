const express = require("express");
const router = express.Router();
const { Poll, Option, Vote } = require("../models");

// GET /polls — return all polls
router.get("/", async (req, res) => {
    const poll = await Poll.findAll();
    res.json(poll);
})
//end

// POST /polls — create a new poll with its options
router.post("/", async (req, res) => {
    const {title,description, options} = req.body
    // const poll = await Poll.create({title,description}, {include: Option});
    const poll = await Poll.create({title,description});
    console.log(poll.id)
    for(let i = 0; i< options.length; i++){
        await Option.create({text: options[i].text, pollId: poll.id  })
    }
    res.status(201).json(poll);
})
    // test it out, we need to put below code into the in postman req.body.
//     {
//     "title": "JavaScript",
//     "description": "Which is the better programming language?",
//     "options":[
//       {"text" : "JavaScript"},
//       {"text": "C++"},
//       {"text": "Python"}
//       ]
//   }
//end


// // GET /polls/:id — return a single poll with its options and vote counts
// router.get("/:id", async (req,res) => {
//     const poll = await Poll.findByPk(req.params.id, {
//         include: [
//             {
//                 model:Option,
//                 include: [Vote]
//             }
//         ]
//     })
// })

// //POST /polls/:id/vote — submit a vote for an option
// router.post("/:id/vote", async (req,res) => {
//     const { optionId } = req.body;
// })



module.exports = router;