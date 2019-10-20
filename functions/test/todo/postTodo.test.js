/* eslint-disable prefer-arrow-callback */
const assert = require('assert');
const supertest = require('supertest');
const status = require('http-status-codes');

const { TodoServer } = require('../../src/todo/TodoServer');

//TODO post named todo item
//TODO get all todo items
//TODO get one todo item

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

    it('given an empty object, should return a 400 Bad Request code', function(done){
        supertest(app)
            .post('/todo')
            .send({}) // Empty object
            .expect(status.BAD_REQUEST, done);
    });

    it('given an object with a name, should return 201 Created', function(done){
        supertest(app)
            .post('/todo')
            .send({ name: 'New Todo' })
            .expect(status.CREATED, done);
    });
});