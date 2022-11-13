const express = require('express');

const app = express();

//Linking the public folder
app.use(express.static('madagascar')); 

//Sendind and Recieving Request
app.get('/', (req, resp) => resp.sendFile('./index.html', {root: __dirname}));
app.get('/index.html', (req, resp) => resp.sendFile('./index.html', {root: __dirname}));
app.get('/about.html', (req, resp) => resp.sendFile('./pages/about.html', {root: __dirname}));
app.get('/contact.html', (req, resp) => resp.sendFile('./pages/contact.html', {root: __dirname}));
app.get('/ask.html', (req, resp) => resp.sendFile('./pages/ask.html', {root: __dirname}));
app.get('/login.html', (req, resp) => resp.sendFile('./pages/login.html', {root: __dirname}));
app.get('/shop.html', (req, resp) => resp.sendFile('./pages/shop.html', {root: __dirname}));
app.get('/blog.html', (req, resp) => resp.sendFile('./pages/blog.html', {root: __dirname}));
app.get('/jackets.html', (req, resp) => resp.sendFile('./pages/jackets.html', {root: __dirname}));
app.get('/sleeping.html', (req, resp) => resp.sendFile('./pages/sleeping.html', {root: __dirname}));
app.get('/tents.html', (req, resp) => resp.sendFile('./pages/tents.html', {root: __dirname}));
app.get('/members.html', (req, resp) => resp.sendFile('./pages/members.html', {root: __dirname}));

app.listen(8080, ()=> console.log('Welcome, madagascar server running...'));