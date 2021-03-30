'use strict';

const express = require('express');
const handler = require('./handler');

const classicLove = require('./calculators/classicLove');
const fakeCalculator2 = require('./calculators/fake_calculator2');
const fakeCalculator3 = require('./calculators/fake_calculator3');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

// 4. The sum of all the weights the aggregator uses always sum up to 1.0. 
// If there's just 1 expected input then that input has a weight of 1.00

//Can code this:
// 5. If the classic compatibility calculator returns a score over 100, use 100.
//but not sure what inputs would give > 100 so use mocking?

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