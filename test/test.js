const request = require('supertest');
const app = require('../index.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('Hello world from check branch!', done);
    });
});