const express = require("express");
const app = express();
const PORT = 8080;
const { db } = require("./models");
const pollRouter = require("./routes/Polls");

// const Option = require('./models/Options')
// const Polls = require('./models/Polls')
// const Votes = require('./models/Votes')

app.use(express.json());


async function startApp() {
    await db.sync({alter: true});

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}

// this test if the data connect to the dababase.
// db.authenticate().then(() => 
//   console.log("DB connected")).catch(console.error)

startApp();

