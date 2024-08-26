const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();
const myServer = http.createServer(app);

const port = 5500;

// Route Handling
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
  res.end();
});

app.get('/about', (req, res) => {
  res.send('This is About Page');
  res.end();
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
  res.end();
});

app.get('/file-write', (req, res) => {
  fs.writeFile('demo.txt', 'hello world', (err) => {
    if (err) {
      res.send('File write failed');
    } else {
      res.send('File written successfully');
    }
    res.end();
  });
});

myServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
