import config from './config';
import express from 'express';
import fs from 'fs';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express');
});

server.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
});

server.listen(config.port, () => {
    console.info("Express listening on port: ", config.port);
});


/*
// THIS IS HTTP - USED AS A SERVER
import http from 'http';

const server = http.createServer((req, res) => {
    res.write("Hello ANOTHER HTTP!\n");
    setTimeout(()=> {
        res.write("I can stream!\n");
        res.end();
    }, 3000);
});

server.listen(8081);
*/


/*
// THIS IS HTTP - USED AS A SERVER
import http from 'http';

const server = http.createServer();

server.listen(8080);

// Event Emitter - The most important emitted event is the 'request' event
// The 'request' event is emitted everytime the HTTP Server receives a request
server.on('request', (req, res) => {
    res.write("Hello HTTP!\n");
    setTimeout(()=> {
        res.write("I can stream!\n");
        res.end();
    }, 3000);
});
*/


/**
 * THIS IS HTTP - USED AS A CLIENT
 * 
import https from 'https';

https.get("https://www.lynda.com", res => {
    // To see the status code as a callback response
    console.log('Response status code: ', res.statusCode);
    
    // To read the data events
    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});
/*
/**
 * import config, { nodeEnv, logStars } from './config';
console.log(config, nodeEnv);
logStars('Function');
 * 
 */
