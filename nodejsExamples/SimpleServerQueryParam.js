// http://zetcode.com/javascript/http/
const http = require('http'); // http module
const url = require('url'); // url module

http.createServer((req, res) => {
    // https://www.w3schools.com/nodejs/nodejs_url.asp
    let q = url.parse(req.url, true);
    console.log(req.url);

    let query = q.query;
    //console.log(q.port); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm' or index.html
    console.log(q.search); //returns '?<myquery params here>'

    let msg = `${query.name} is ${query.age} years old`;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(msg);
    res.end();

}).listen(8065);

console.log('server running on port 8065');