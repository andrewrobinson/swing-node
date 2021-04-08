'use strict';

import Custom, {Foo, url, bar} from './module.js';
import Rectangle from './rectangle.js';

import express from 'express';
// var router = express.Router();

// import handler from './handler';
// const classicLoveHelper = require('./calculators/helpers/classicLoveHelper');
// const classicLove = require('./calculators/classicLove');
// const fakeCalculator2 = require('./calculators/fake/fake_calculator2');
// const fakeCalculator3 = require('./calculators/fake/fake_calculator3');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();







  
/*

See handler.test.js for proof of  0.89 x 0.2 + 0.5 x 0.5 + 0.0 x 0.3 = 0.428 behaviour

NB - Mary loves James returns 0.86 not 0.89 so if you have the fake ones below configured you get 0.422 when testing with

curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/

*/

// const calculators = [
// 	{"weight": 0.2, "fn": classicLove(classicLoveHelper)}, //weight gets bumped to 1 if only a single calculator is enabled
// 	// {"weight": 0.5, "fn": fakeCalculator2}, 
// 	// {"weight": 0.3, "fn": fakeCalculator3}
// ];

// const myHandler = handler(calculators);

app.use(express.json());

app.post('/', (req, res) => {
	const personOne = req.body.personOne;
	const personTwo = req.body.personTwo;
	const square = new Rectangle(10, 10);
	console.log(`XXX square area: ${square.area}`); // 100

	const custom = new Custom();
	const foo = new Foo();
	bar();
	console.log(url);

	res.json({a:"b"});

	// res.json(myHandler.handlePost(personOne, personTwo));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);