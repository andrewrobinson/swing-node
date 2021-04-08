import express from 'express';

// import Custom, {Foo, url, bar} from './module.js';
import Handler from './handler.js';
import ClassicLoveHelper from './calculators/helpers/classicLoveHelper.js';
import ClassicLove from './calculators/classicLove.js';
import fakeCalculator2 from './calculators/fake/fake_calculator2.js';
import fakeCalculator3 from './calculators/fake/fake_calculator3.js';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

/*

See handler.test.js for proof of  0.89 x 0.2 + 0.5 x 0.5 + 0.0 x 0.3 = 0.428 behaviour

NB - Mary loves James returns 0.86 not 0.89 so if you have the fake ones below configured
you get 0.422 when testing with
curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/

*/

const calculators = [
  { weight: 0.2, fn: new ClassicLove(new ClassicLoveHelper()) }, // weight gets bumped to 1 if only a single calculator is enabled
  { weight: 0.5, fn: fakeCalculator2 },
  { weight: 0.3, fn: fakeCalculator3 },
];

const myHandler = new Handler(calculators);

app.use(express.json());

app.post('/', (req, res) => {
  const { personOne } = req.body;
  const { personTwo } = req.body;
  res.json(myHandler.handlePost(personOne, personTwo));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
