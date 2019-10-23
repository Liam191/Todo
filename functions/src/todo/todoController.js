"use strict";
const todoController = require('express').Router();
const status = require('http-status-codes');

todoController.all('/todo', (request, response) => {
    if(request.body.name){
        response.status(status.CREATED)
        response.setHeader('Location', 'http://localhost:8080/todo/123456789a')
    } else {
        response.status(status.BAD_REQUEST)
    }

    return response.json();
});

module.exports = todoController;