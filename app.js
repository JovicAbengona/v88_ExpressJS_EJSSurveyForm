var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function(request, response){
    response.render("index");
});

app.post("/result", function(request, response){
    response.render("result", {data: request.body});
});

app.listen(8080, function(){
    console.log("Listening on 8080");
});