"use strict";
const express = require('express');
const bodyparser = require('body-parser');

const todoController = require('./todoController');

function TodoServer(){
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    
    app.use(todoController);

    return app;
}

module.exports = {
    TodoServer
};
