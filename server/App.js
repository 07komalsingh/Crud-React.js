const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")
require("./db/conn");
const bodyParser = require('body-parser');

const router = require("./routes/router");
const { default: nodemon } = require("nodemon");
const port = 8001;

// Default Server 
// app.get("/", (req,res)=>{
//    res.send("server start")
// });

//middleware
app.use(express.json()) 
app.use(cors() );
app.use(router);
app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log("server starts at port no:" + port);
});

