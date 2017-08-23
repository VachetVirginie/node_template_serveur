var express = require('express');
let app = express();
let url = require('url');

app.use(express.static("public"));

app.listen(80);