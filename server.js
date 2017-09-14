const express = require('express'); 
const app = express(); 
const http = require('http'); 
const fs = require('fs');
const cors = require('cors'); 
// Server Setup 

const port = process.env.PORT || 3004
const server = http.createServer(app); 

let authflag = false;

server.listen(port);

app.use(express.static(__dirname)); 

app.get("/", function(req, res){ 
    authflag = false; 

   res.writeHead(200,{"Context-Type":"text/html"});
	fs.createReadStream("login.html").pipe(res);
});

app.get("/check" , function(req , res){

    if( req.query.passcode == 'pUn@123'){
        authflag = true; 
        res.send({ "auth" :"1"}); 
    }else{
        authflag = false; 
        res.send({ "auth" : "0"});
    }

}); 

app.get('/auth' , function(req , res){
  
    if(authflag){
        res.writeHead(200,{"Context-Type":"text/html"});
        fs.createReadStream("content.html").pipe(res);
        authflag = false;
    }

});

