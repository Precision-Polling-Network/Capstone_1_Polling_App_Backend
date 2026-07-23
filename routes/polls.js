const express = require("express");
const router = express.Router();
const { Poll, Option, Vote } = require("../models");

// GET /polls — return all polls
router.get("/", async (req, res) => {
  const poll = await Poll.findAll();
  res.json(poll);
});
//end

// GET /polls/:id — return a single poll with its options and vote counts
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const poll = await Poll.findByPk(id, { include: Option });
    res.json(poll);
  } catch (err) {
    next(err);
  }
});

// POST /polls — create a new poll with its options
router.post("/", async (req, res, next) => {
  try {
    const { title, description, options } = req.body;
    const poll = await Poll.create(
      { title, description, options },
      {
        include: [Option],
      },
    );
    console.log(poll.id);
    // for(let i = 0; i< options.length; i++){
    //     await Option.create({text: options[i].text, pollId: poll.id  })
    // }
    res.status(201).json(poll);
  } catch (err) {
    next(err);
  }
});
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

// //POST /polls/:id/vote — submit a vote for an option
router.post("/:id/vote", async (req, res, next) => {
  try {
    // getting the selectedOption from FE and rename to selectedOptionId
    const { selectedOption: selectedOptionId } = req.body;

    // finding pollId from params
    const pollId = Number(req.params.id);
    // find the poll and its options
    const poll = await Poll.findByPk(pollId, { include: Option });
    //  if selectionOptionId is one of the poll.options:
    if (!poll.options.find((opt) => opt.id === selectedOptionId)) {
      return res.status(404).send("Invalid option");
    }
    //  create a Vote
    const vote = await Vote.create({ optionId: selectedOptionId });

    //  else return an error

    res.status(201).json(vote);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
