var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "./public")));


const PORT = process.env.PORT || 5000;
app.listen(PORT);