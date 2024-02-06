const express = require("express");

const app = express();

app.use("/example", express.static("example"));

app.use("/test", express.static("test"));

app.listen(5002, () =>{
    console.log("Server is listening on port 5002");
});

