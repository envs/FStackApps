import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

// Sass implementation with Express
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

// EJS
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    //res.send('Hello Express');
    // res.render('index', {
    //     content: 'Error in REACT - Fallback to <em>NORMAL :) !</em><br>'
    //     // content: 'Hello Express and <em>EJS!</em><br>'
    // });
    res.render('index', {
        content: ''
    });
});

// Using Express Static Middleware to serve static contents. .use() is how we put the middleware to use :)
server.use('/api', apiRouter);
server.use(express.static('public'));

/*
server.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
});
*/

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
