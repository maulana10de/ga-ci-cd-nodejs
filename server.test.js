const app = require('./server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('Call the /milan endpoint', async (done) => {
  const res = await request.get('/milan');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello, milanisti jakarta!');
  done();
});
