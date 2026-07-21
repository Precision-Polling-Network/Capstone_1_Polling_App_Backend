const express = require("express");
const router = express.Router();
const { Polls, Option, Vote } = require("../models");

// GET /polls — return all polls
router.get("/polls", async (req, res) => {
    const polls = await Polls.findAll();
    res.json(polls);
})

// POST /polls — create a new poll with its options
router.post("/polls", async (req, res) => {
    const { title, description, option} = req.body;
})


// GET /polls/:id — return a single poll with its options and vote counts
router.get("/:id", async (req,res) => {
    const poll = await Poll.findByPk(req.params.id, {
        include: [
            {
                model:Option,
                include: [Vote]
            }
        ]
    })
})

//POST /polls/:id/vote — submit a vote for an option
router.post("/:id/vote", async (req,res) => {
    const { optionId } = req.body;
})



module.exports = router;