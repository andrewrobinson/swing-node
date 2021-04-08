// Java code found at https://www.codebrainer.com/blog/love-calculator-android
// manually converted to js and tested via classicLoveHelper.test.js

export default class ClassicLoveHelper {
  countChars(name1, name2) {
    const combinedString = `${name1.toLowerCase()}loves${name2.toLowerCase()}`;

    let strAllChars = '';
    let strCount = '';

    for (const c1 of combinedString) {
      if (strAllChars.indexOf(c1) < 0) {
        let count = 0;
        for (const c2 of combinedString) {
          if (c1 == c2) {
            count += 1;
          }
        }
        strAllChars += c1;
        strCount += count.toString();
      }
    }

    return strCount;
  }

  shortenNumber(str) {
    let shortenString = '';
    if (str.length >= 2) {
      const int1 = parseInt(str.charAt(0));
      const int2 = parseInt(str.charAt(str.length - 1));
      const sumOfInts = (int1 + int2).toString();
      shortenString = sumOfInts + this.shortenNumber(
        str.substring(1, (str.length - 1)),
      );
    } else {
      return str;
    }
    return shortenString;
  }

  // Method
  calculate(str1, str2) {
    let shortString = this.countChars(str1, str2);
    do {
      shortString = this.shortenNumber(shortString);
    } while (shortString.length > 2);
    return parseInt(shortString);
  }
}
