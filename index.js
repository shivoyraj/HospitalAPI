const express = require("express");
const app = express();

const mongoose = require("./config/mongoose");
const indexRoutes = require("./routes/index_routes");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", indexRoutes);

const port = 3000 || process.env.port;

app.listen(port,function(err){
    if(err)
        console.log("some error occured while starting the server : "+err.message)
    else
        console.log("server running successfully at : "+port)
})