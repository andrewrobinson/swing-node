const logger = require('../logger');

//Java code found at https://www.codebrainer.com/blog/love-calculator-android
//manually converted to js and tested via classicLove.test.js

function countChars(name1, name2) {
  const combinedString = name1 + " loves " + name2;

  let strAllChars = "";
  let strCount = "";

  for(const c1 of combinedString) {
    if (strAllChars.indexOf(c1) < 0) {
      let count = 0;
      for (const c2 of combinedString) {
        if (c1 === c2) {
          count = count + 1;
        }
      }
      strAllChars = strAllChars + c1;
      strCount = strCount + count.toString();
    }
  }

  return strCount;

}


// String shortenNumber(String str) {
//   String shortenString = "";
//   if (str.length() >= 2) {
//     int int1 = Integer.parseInt(String.valueOf(str.toCharArray()[0]));
//     int int2 = Integer.parseInt(String.valueOf(str.toCharArray()[str.length() - 1]));
//     shortenString = String.valueOf(int1 + int2) + shortenNumber(str.substring(1, str.length() - 1));
//   } else {
//     return str;
//   }

//   return shortenString;
// }


function shortenNumber(str) {
  console.log("shortenNumber called with:"+str);


  let shortenString = "";

  if (str.length >= 2) {

    const int1 = parseInt(str.charAt(0))
    const int2 = parseInt(str.charAt(str.length-1))    
    const prefix = (int1 + int2).toString();
    console.log("adding int1:"+int1+" and int2:"+int2+", so prefix is:"+prefix);
    shortenString = prefix+shortenNumber(str.substring(1, (str.length - 1)));;
    console.log("shortenString becomes:"+shortenString);
  } else {
    return str;
  }

  console.log("returning shortenString:"+shortenString);
  return shortenString;
}




const classicLove = {

  getScore: function(personOne, personTwo) {

    // console.log("before");
    const calculation = countChars(personOne.name, personTwo.name);
    // console.log(`calculation:${calculation}`);
    logger.info(`calculation:${calculation}`);
    const total = shortenNumber(calculation);
    logger.info(`total from shortenNumber:${total}`);

    return {
      "calculatorName": "classicLove",
      "score": total,
      "maximum": 100
    }
  },

}

module.exports = classicLove;


