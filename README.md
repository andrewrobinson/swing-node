* THE UNSCIENTIFIC LOVE COMPATIBILITY CALCULATOR API - Coding Assesment (BE)

Submission by Andrew Robinson


* To run
npm start
or nodemon server.js

* To test running server with curl / Postman
~~~~
curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/ 
~~~~

This json input format is easily extensible should you need surname, date of birth etc for other calculators

* To run unit tests
npm test


* What you think this test is about
Finding love
Seeing if you can read and implement a spec where some requirements are not yet firmed up.
Seeing if you have attention to detail

* Remarks
This was fun but did NOT take 30 minutes. 
Next steps would be adding something like Sinon.js for mocking, and adding typescript.




