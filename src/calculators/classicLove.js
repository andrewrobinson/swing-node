const classicLoveHelper = require('./helpers/classicLoveHelper');

const classicLove = {

  getScore: function(personOne, personTwo) {

    let percentage = classicLoveHelper.calculate(personOne.name, personTwo.name);
  
    // 5. If the classic compatibility calculator returns a score over 100, use 100.
    //To get code coverage for this I could mock classicLoveHelper.calculate while testing this logic in getScore.
    if (percentage > 100) {
      percentage = 100;
    }

    return {
      "calculatorName": "classicLove",
      "score": percentage,
      "maximum": 100
    }
  },

}

module.exports = classicLove;


