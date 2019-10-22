"use strict";
const todoController = require('express').Router();
const status = require('http-status-codes');

todoController.all('/todo', (request, response) => {
    if(request.body.name){
        return response.sendStatus(status.CREATED);
    } else {
        return response.sendStatus(status.BAD_REQUEST);
    }
});

module.exports = todoController;