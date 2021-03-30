const logger = require('../logger');

//Java code found at https://www.codebrainer.com/blog/love-calculator-android
//manually converted to js and tested via classicLove.test.js

function countChars(name1, name2) {
  const combinedString = name1.toLowerCase() + "loves" + name2.toLowerCase();

  let strAllChars = "";
  let strCount = "";

  for(const c1 of combinedString) {
    if (strAllChars.indexOf(c1) < 0) {
      let count = 0;
      for (const c2 of combinedString) {
        if (c1 ==c2) {
          count = count + 1;
        }
      }
      strAllChars = strAllChars + c1;
      strCount = strCount + count.toString();
    }
  }

  return strCount;

}

function shortenNumber(str) {
  let shortenString = "";
  if (str.length >= 2) {
    const int1 = parseInt(str.charAt(0))
    const int2 = parseInt(str.charAt(str.length-1))    
    const sumOfInts = (int1 + int2).toString();
    shortenString = sumOfInts+shortenNumber(
      str.substring(1, (str.length - 1))
      );
  } else {
    return str;
  }
  return shortenString;
}

function calculate(str1, str2) {
  let shortString = countChars(str1, str2);
  do {
    shortString = shortenNumber(shortString);
  } while (shortString.length > 2);
  return shortString;
}

const classicLove = {

  //exposed only so I could easily unit test in isolation
  countChars: countChars,

  //exposed only so I could easily unit test in isolation
  shortenNumber: shortenNumber,

  //exposed only so I could easily unit test in isolation
  calculate: calculate,

  getScore: function(personOne, personTwo) {

    let percentage = calculate(personOne.name, personTwo.name);
  
    //because item 5) said so. I couldn't find inputs that generated > 100 though.
    //I don't have code coverage for this. 
    //Potentially I could mock calculate while testing this logic in getScore.
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


