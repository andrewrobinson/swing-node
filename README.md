# THE UNSCIENTIFIC LOVE COMPATIBILITY CALCULATOR API - Coding Assesment

## Submission by Andrew Robinson <andrewmcrobinson@gmail.com>

## To run server
```bash
npm install
npm start
or 
nodemon server.js
```

## To test running server with curl / Postman
```bash
curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/ 
```

This json input format is easily extensible should you need surname, date of birth etc for other calculators. I chose to echo the people back in the response too.

## To run unit tests
```bash
npm test
```

## What you think this test is about

* Finding love

* Seeing if you can read and implement a spec, leaving space for requirements that are not yet firmed up.

* Seeing if you have attention to detail.

* Seeing if you write the love calculator yourself or if you convert the Android Java to js? Or maybe there is a js version somewhere on the internet?

## Remarks
* This was fun but did NOT take 30 minutes. 

* Next steps would be adding something like Sinon.js for mocking, Istanbul and adding typescript.

* Let me know if you want me to go further. I haven't coded typescript much yet, though would be interested to see how it changes the code.

 * I learnt node in the ES5 era, then have been using Scala and Golang in my most recent position. I'm hoping this is ES6 but haven't gone crazy with linters and style guides.

* Item 9 in in your test has a typo:
```
because we haven't made up our made about a few things yet

should read

because we haven't made up our mind about a few things yet
```


