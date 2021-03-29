'use strict';

const express = require('express');

// const classicLove = require('./calculators/classicLove');
const fakeCalculator1 = require('./calculators/calculator1');
const fakeCalculator2 = require('./calculators/calculator2');
const fakeCalculator3 = require('./calculators/calculator3');

const logger = require('./logger');

const calculators = [
	{"weight": 0.2, "fn": fakeCalculator1}, 
	{"weight": 0.5, "fn": fakeCalculator2}, 
	{"weight": 0.3, "fn": fakeCalculator3}
];

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {

	const personOne = req.body.personOne;
	const personTwo = req.body.personTwo;

	let totalScore = 0;

	for (const calculator of calculators) {
		const scoreObj = calculator.fn.getScore(personOne, personTwo);
		const scorePercentage = scoreObj.score/scoreObj.maximum;
		const weightedScorePercentage = scorePercentage * calculator.weight;
		logger.info(`scorePercentage:${scorePercentage}, weight:${calculator.weight}, weightedScorePercentage:${weightedScorePercentage}`);
		totalScore = totalScore + weightedScorePercentage;
	}

	const roundedTotalScore = totalScore.toFixed(3);
	const returnObj = {
		"personOne": personOne,
		"personTwo": personTwo,
		"result": roundedTotalScore
	}

	res.json(returnObj);

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);