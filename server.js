const express = require('express'); 
const app = express(); 
const http = require('http'); 
const fs = require('fs');
const cors = require('cors'); 
// Server Setup 

const port = process.env.PORT || 3004
const server = http.createServer(app); 

server.listen(port);

app.use(express.static(__dirname)); 

app.get("/", function(req, res){ 
   res.writeHead(200,{"Context-Type":"text/html"});
	fs.createReadStream("index.html").pipe(res);
});

console.log(`Server running on port ${port}`);

