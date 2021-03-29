'use strict';

const express = require('express');
const handler = require('./handler');

const classicLove = require('./calculators/classicLove');
const fakeCalculator2 = require('./calculators/calculator2');
const fakeCalculator3 = require('./calculators/calculator3');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const calculators = [
	{"weight": 0.2, "fn": classicLove}, 
	{"weight": 0.5, "fn": fakeCalculator2}, 
	{"weight": 0.3, "fn": fakeCalculator3}
];

const myHandler = handler(calculators);

app.use(express.json());

app.post('/', (req, res) => {
	const personOne = req.body.personOne;
	const personTwo = req.body.personTwo;
	res.json(myHandler.handlePost(personOne, personTwo));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);