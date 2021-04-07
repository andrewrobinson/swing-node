
// Replace each require() call with the equivalent in import syntax, 
// every exports.* into an export and get rid of module.exports.


export function construct (calculators) {

    // 4. The sum of all the weights the aggregator uses always sum up to 1.0. 
    // If there's just 1 expected input then that input has a weight of 1.00

    if (calculators.length == 1) {
        calculators[0].weight = 1;
    }

    let cumulativeWeight = 0;
    for (const calculator of calculators) {
        cumulativeWeight = cumulativeWeight + calculator.weight;
    }

    if (cumulativeWeight != 1) {
        console.log("ERROR - calculator weights do not sum to 1! Check calculator configuration.");
        process.exit(1);
    }

    return {
        handlePost: function(personOne, personTwo) {

            let totalScore = 0;
    
            for (const calculator of calculators) {
                const scoreObj = calculator.fn.getScore(personOne, personTwo);
                const scorePercentage = scoreObj.score/scoreObj.maximum;
                const weightedScorePercentage = scorePercentage * calculator.weight;
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



// // export var greeting : string = construct;

// module.exports = { default: handler }
  