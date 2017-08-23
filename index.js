const express = require('express');
let app = express();
const mustache = require('mustache');
const fs = require('fs')

app.use(express.static("public"));

app.get("/test", function(req, resp) {
    let str = mustache.render("hello {{name}}!!!", {
        name: "vivi"
    })
    resp.send(str)
});

app.engine("html", function(path, option, callback) {

    fs.readFile(path, function(err, content) {
        if (err) {
            return callback(err);
        }
        let str = mustache.render(content, options);
        return callback(null, str);
    })

})

app.listen(80);