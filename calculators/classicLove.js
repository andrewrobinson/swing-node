//Java code found at https://www.codebrainer.com/blog/love-calculator-android
//converted to js and asserted via a test

function countChars(name1, name2) {
  const combined = name1 + " loves " + name2;

  let strAllChars = "";
  let strCount = "";

  // for (char c1 : combinedString.toCharArray()) {
  //   if (strAllChars.indexOf(c1) < 0) {
  //     int count = 0;
  //     for (char c2 : combinedString.toCharArray()) {
  //       if (c1 == c2) {
  //         count = count + 1;
  //       }
  //     }
  //     strAllChars = strAllChars + c1;
  //     strCount = strCount + String.valueOf(count);
  //   }
  // }

  return strCount;
}

function shortenNumber(str) {
  let shortenString = "";

  // if (str.length() >= 2) {
  //   int int1 = Integer.parseInt(String.valueOf(str.toCharArray()[0]));
  //   int int2 = Integer.parseInt(String.valueOf(str.toCharArray()[str.length() - 1]));
  //   shortenString = String.valueOf(int1 + int2) + shortenNumber(str.substring(1, str.length() - 1));
  // } else {
  //   return str;
  // }

  return shortenString;
}




const classicLove = {

  getScore: function(personOne, personTwo) {

    const calculation = countChars(personOne.name, personTwo.name);

    const total = shortenNumber(calculation);

    return {
      "calculatorName": "classicLove",
      "score": total,
      "maximum": 100
    }
  },

}

module.exports = classicLove;


