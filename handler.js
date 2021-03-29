const logger = require('./logger');

module.exports = function (calculators) {
    return {
        handlePost: function(personOne, personTwo) {

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
            return returnObj;
        },
    };
};

  