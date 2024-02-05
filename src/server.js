const express = require("express");

const app = express();

app.listen(5001, () =>{
    console.log("Server is listening on port 5001");
});

app.listen(5001, () =>{
    console.log("Server is listerning on port 5001" );
});