const express = require("express")
const cors = require("cors")
const { connectDb } = require("./dbConfig");
require('dotenv').config({path: `src/.env`})


const app = express()

// const PORT = 5800;
app.listen(process.env.PORT, async() => {
    await connectDb();
    console.log("Users api listing on PORT : ",process.env.PORT);
})

app.use(express.json())
app.use(cors());


app.get("/",(req,res) => {
    return res.status(200).send({message : "Welcome to users data API",status:true})
})

const userRouters = require("./UserRoute");
app.use("/users", userRouters);


module.exports = app;
