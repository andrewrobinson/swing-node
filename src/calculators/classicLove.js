
export default function (classicLoveHelper) {

  return {
    getScore: function(personOne, personTwo) {

      //percentage comes back as a string
      let percentage = classicLoveHelper.calculate(personOne.name, personTwo.name);
    
      // 5. If the classic compatibility calculator returns a score over 100, use 100.

      if (percentage > 100) {
        percentage = 100;
      }
  
      return {
        "calculatorName": "classicLove",
        "score": percentage,
        "maximum": 100
      }
    }
  }
};