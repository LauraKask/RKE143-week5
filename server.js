const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000; 

const server = http.createServer((request, response)=> {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);

    if(requestUrl === '/') {
        fs.readFile('index.html', (error, fileContent)=> {
            if(error){
                response.writeHead(404);
                response.write(`Error.File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }
        }); 

    } else if (requestUrl === '/about') {
        fs.readFile('about.html', (error, fileContent)=> {
            if(error){
                response.writeHead(404);
                response.write(`Error.File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        }); 
        
    } else if (requestUrl === '/contact') {
        fs.readFile ('contact.html', (error, fileContent)=> {
            if(error){
                response.writeHead(404);
                response.write(`Error.File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }    
            response.end();
        }); 
        
    } else {
        response.writeHead(404);
        response.write(`Error ${requestUrl} Page not found.`);
        response.end();
    }
});

//Ctrl + c

server.listen(port, error => {
    if(error){
        console.log(error);
    } else {
        console.log(`Server is listening on port ${port}.`);
    }
});
