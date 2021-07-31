const express = require("express");
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const PORT = 5000
const {MONGOURI} = require("./keys");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.on("connected",()=>{
    console.log("Connected to Database");
})
mongoose.connection.on("error", (err)=>{
    console.log("error: ", err);
})


app.use(require("./routes/user"));


app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
})