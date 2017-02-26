 var express= require('express');
var app= express()
var port = 4000;

app.use(express.static("public"));
app.use("/static",express.static("assets"));
app.get('/',function(req,res){
res.sendFile("index.html");
//res.end();
});


console.log("Server is running at "+ port);  
app.listen(port);