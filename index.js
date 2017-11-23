var express = require("express");
console.log(require.resolve("net"));

var t1 = require("./test1");
var emp = require("./test2");

var app = express();

app.get("/test1", (req, res) => {
    console.log("Requested");
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var e = new emp.E1();
    e.setName("Test1");
    e.setId(20);
    var jsdata = JSON.stringify(e);    
    res.end("<h3>" + jsdata + "</h3>");
});

app.get("/test2", (req, res) => {
    console.log("Requested 2");
    /*res.writeHead(200, {
        'Content-Type': 'application/json'
    });*/

    var e = new emp.E2();
    e.setName("Test2");
    e.setId(20);    
    res.json(e);
});

app.listen(9092);
console.log("Started");