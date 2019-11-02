const { assert } = require('chai');
const TodoCore = require('../../src/todo/TodoCore');

describe('Todo CRUD', function(){
    let core;
    beforeEach(function(){
        core = TodoCore();
    });

    it('should throw an "illegal argument" error given no arguments', function(){
        assert.throws(function(){
            core.addTodo()
        }, /Illegal Argument/);
    });

    //TODO add setup in beforeEach with test data (mock database??)
    //TODO test that an entry with the same description was successfully inserted
    it('should not throw an error when given a todo name', function(){
        core.addTodo('Test todo name');
    });
});
