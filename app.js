const express = require("express");
const app = express();
const PORT = 8080;
const { db } = require("./models");
const pollRouter = require("./routes/polls");
const cors = require("cors")
const morgan = require("morgan")
// const Option = require('./models/Options')
// const Polls = require('./models/Polls')
// const Votes = require('./models/Votes')

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/polls", pollRouter)



async function startApp() {
    await db.sync();

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}

// this test if the data connect to the dababase.
// db.authenticate().then(() => 
//   console.log("DB connected")).catch(console.error)

startApp();

