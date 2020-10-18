let http = require('http');
let port = 3000;

let app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "This is directly from my Node server" }));
});
app.listen(port);
console.log('server running on port ', port);