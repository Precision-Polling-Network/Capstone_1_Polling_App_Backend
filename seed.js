const { db, Polls, Options, Votes } = require("./models");

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
    { text: "C++" },
    { text: "JavaScript" },
    { text: "Movies" },
    { text: "Shows" },
    { text: "Soccer" },
    { text: "Football" },
  ];
  await Polls.bulkCreate(polls);
  await Options.bulkCreate(options);
  console.log("Seeded");
  process.exit();
}

seed();
