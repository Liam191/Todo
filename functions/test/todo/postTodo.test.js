/* eslint-disable prefer-arrow-callback */
const assert = require('assert');
const supertest = require('supertest');
const status = require('http-status-codes');

const { TodoServer } = require('../../src/todo/TodoServer');

describe('POST /todo', function(){
    let app;
    beforeEach(function(){
        app = TodoServer();
    });

    it('given no parameters, should return a 400 Bad Request code', function(done){
        supertest(app)
            .post('/todo')
            .send() //Nothing
            .expect(status.BAD_REQUEST, done);
    });
});