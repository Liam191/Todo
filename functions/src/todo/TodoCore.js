"use strict";
function TodoCore(){
    return {
        addTodo
    };

    function addTodo(description){
        if(!description){
            throw new Error('Illegal Argument: addTodo requires "description" parameter');
        }
    }
}

module.exports = TodoCore;