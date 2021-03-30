'use strict';

const express = require('express');
const handler = require('./handler');

const classicLove = require('./calculators/classicLove');
const fakeCalculator2 = require('./calculators/fake/fake_calculator2');
const fakeCalculator3 = require('./calculators/fake/fake_calculator3');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

//see handler.test.js for proof of  0.89 x 0.2 + 0.5 x 0.5 + 0.0 x 0.3 = 0.428 behaviour
//nb - Mary loves James returns 0.86 not 0.89 so if you keep the fake ones below configured you get 0.422
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