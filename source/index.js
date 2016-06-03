var express = require("express");
var app = express();

app.use("/api", require("./controllers/api"));

app.listen(3000);