const express = require("express");
const app = express();
const PORT = 8080;
const { db } = require("./models");
const pollRouter = require("./routes/polls");
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json());
app.use(cors());
app.use(morgan());

app.use(logger);
app.use("/polls", pollRouter);
app.use(errorHandler);

async function logger(req, res, next){
    console.log('>>>Logging request method', req.method, req.originalUrl)
    next()
}

async function errorHandler(err, req, res, next){
    await console.log(">>>>>>>Error Message: ", err.message);
    res.status(500).json({Error: "Something Went Wrong"})
}
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

