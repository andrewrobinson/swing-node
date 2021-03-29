'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello remote worldfff!\n');
});

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
	var username = req.body.username;
	var password = req.body.password;
	var msg = `username:${username}, password:${password}`;
	res.json({"foo": "bar", "msg": msg});
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);