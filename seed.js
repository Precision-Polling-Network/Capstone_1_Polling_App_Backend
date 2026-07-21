const { db, Poll, Option, Vote } = require("./models");

async function seed() {
  await db.sync({force: true});

  const polls = [
    {
      title: "C++ vs JavaScript",
      description: "Which is the better programming language?",
    },
    { title: "Movies vs Shows", description: "Which do you watch more" },
    {
      title: "Soccer vs Football",
      description: "What should the sport be called?",
    },
  ];

  const options = [
    { text: "C++", pollId: 1 },
    { text: "JavaScript", pollId: 1 },
    { text: "Movies" , pollId: 2},
    { text: "Shows" , pollId: 2},
    { text: "Soccer" , pollId: 3},
    { text: "Football" , pollId: 3},
  ];
  await Poll.bulkCreate(polls);
  await Option.bulkCreate(options);
  console.log("Seeded");
  process.exit();
}

seed();
