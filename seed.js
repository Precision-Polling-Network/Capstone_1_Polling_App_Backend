const {db, Options, Polls, Votes} = require('./models');

async function seed(){
    await db.sync({force:true});
    await db.sync({alter: true});


    const Poll = await Polls.create({
        tite:"Fun and icebreaker",
        description:"Which super power do you choose?"
    });

    await Options.create({text:"Flying",pollId: poll.id})
    await Options.create({text:"X-ray vision",pollId: poll.id})
    await Options.create({text:"super smart",pollId: poll.id})
    await Options.create({text:"super speed",pollId: poll.id})
    
}

seed().catch(console.error);