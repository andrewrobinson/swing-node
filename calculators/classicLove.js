const logger = require('../logger');

//Java code found at https://www.codebrainer.com/blog/love-calculator-android
//manually converted to js and tested via classicLove.test.js

//22 11111 22 1
//34322
//563
// 86%

function countChars(name1, name2) {
  const combinedString = name1.toLowerCase() + "loves" + name2.toLowerCase();

  let strAllChars = "";
  let strCount = "";

  for(const c1 of combinedString) {
    if (strAllChars.indexOf(c1) < 0) {
      // console.log("found at least one instance of "+c1)
      let count = 0;
      for (const c2 of combinedString) {
        // console.log("comparing c1:"+c1+" to c2:"+c2);
        if (c1 ==c2) {
          count = count + 1;
          // console.log("found c1==c2 = "+c1+", count incremented to:"+count);
        }
      }
      // console.log("adding c1:"+c1+"to strAllChars:"+strAllChars);
      strAllChars = strAllChars + c1;
      // console.log("strAllChars now:"+strAllChars);
      // console.log("adding:"+count.toString()+" to strCount:"+strCount);
      strCount = strCount + count.toString();
      // console.log("strCount after:"+strCount+"\n\n");

    }
  }

  return strCount;

}

function shortenNumber(str) {
  console.log("shortenNumber called with:"+str);
  let shortenString = "";
  if (str.length >= 2) {
    const int1 = parseInt(str.charAt(0))
    const int2 = parseInt(str.charAt(str.length-1))    
    const sumOfInts = (int1 + int2).toString();
    // console.log("adding int1:"+int1+" and int2:"+int2+", so sumOfInts is:"+sumOfInts);
    shortenString = sumOfInts+shortenNumber(
      str.substring(1, (str.length - 1))
      );

    // console.log("shortenString becomes sumOfInts:"+sumOfInts+" plus recursive so:"+shortenString);
  } else {
    // console.log("str length <2 so returning str:"+str);
    return str;
  }

  // console.log("returning shortenString:"+shortenString);
  return shortenString;
}

function calculate(str1, str2) {
  let shortString = countChars(str1, str2);
  // let output = shortString;
  do {
    // output = output + "\n";
    shortString = shortenNumber(shortString);
    // if (shortString.length == 2) {
    //   output = output + "\n";
    // }
    // output = output + shortString;
  } while (shortString.length > 2);

  // output = output + "%";

  // console.log("returning output:"+output)
  // return output;
  return shortString;
}




const classicLove = {

  //exposed only so I could easily unit test in isolation
  countChars: countChars,

  //exposed only so I could easily unit test in isolation
  shortenNumber: shortenNumber,

  calculate: calculate,

  getScore: function(personOne, personTwo) {

    const percentage = calculate(personOne.name, personTwo.name);
    
    logger.info(`percentage:${percentage}`);


    return {
      "calculatorName": "classicLove",
      "score": percentage,
      "maximum": 100
    }
  },

}

module.exports = classicLove;


