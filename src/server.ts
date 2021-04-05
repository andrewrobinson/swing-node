'use strict';

// const express = require('express');
// import express = require("express");
// import { Router, Application, Request, Response} from 'express';

import express from 'express'

const handler = require('./handler');

const classicLove = require('./calculators/classicLove');
const fakeCalculator2 = require('./calculators/fake/fake_calculator2');
const fakeCalculator3 = require('./calculators/fake/fake_calculator3');



// - const { Router } = require('express');
// + import { Router } from 'express';
 
// - const routes = Router();
// + export const routes = Router();




const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

/*

See handler.test.js for proof of  0.89 x 0.2 + 0.5 x 0.5 + 0.0 x 0.3 = 0.428 behaviour

NB - Mary loves James returns 0.86 not 0.89 so if you have the fake ones below configured you get 0.422 when testing with

curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/

*/

const calculators = [
	{"weight": 0.2, "fn": classicLove}, //weight gets bumped to 1 if only a single calculator is enabled
	// {"weight": 0.5, "fn": fakeCalculator2}, 
	// {"weight": 0.3, "fn": fakeCalculator3}
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