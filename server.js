const http = require('http');
const url = require('url');
const fs = require('fs');

// Use the environment variable for the port, or fallback to 3000 for local development
const port = process.env.PORT || 3000; 

const serveFile = (filePath, response) => {
    fs.readFile(filePath, (error, fileContent) => {
        if (error) {
            response.writeHead(404);
            response.write('Error. File not found.');
        } else {
            response.writeHead(200);
            response.write(fileContent);
        }
        response.end(); // Ensure response ends after file is served or error is sent
    });
};

const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);

    switch (requestUrl) {
        case '/':
            serveFile('index.html', response);
            break;
        case '/about':
            serveFile('about.html', response);
            break;
        case '/contact':
            serveFile('contact.html', response);
            break;
        default:
            response.writeHead(404);
            response.write(`Error ${requestUrl} Page not found.`);
            response.end();
    }
});

// Listen on the port provided by Render or 3000 for local development
server.listen(port, error => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server is listening on port ${port}.`);
    }
});
