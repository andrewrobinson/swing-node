'use strict';

const express = require('express');
const handler = require('./handler');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
	const personOne = req.body.personOne;
	const personTwo = req.body.personTwo;
	//TODO - could add validate body and return http 400 if no personOne.name, personTwo.name
	res.json(handler.handlePost(personOne, personTwo));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);