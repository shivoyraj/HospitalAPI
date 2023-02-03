const express = require("express")
const app = express()
const portNo = 3000


app.listen(portNo,function(err){
    if(err)
        console.log("some error occured while starting the server : "+err.message)
    else
        console.log("server running successfully at : "+portNo)
})