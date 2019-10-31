const { assert } = require('chai');
const TodoCore = require('../../src/todo/TodoCore');

describe('Create todo item', function(){
    let core;
    beforeEach(function(){
        core = TodoCore();
    });

    it('should throw an "illegal argument" error given no arguments', function(){
        assert.throws(function(){
            core.addTodo()
        }, /Illegal Argument/);
    });
});
