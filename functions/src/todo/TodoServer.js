"use strict";
const express = require('express');
const status = require('http-status-codes');
const bodyparser = require('body-parser');

function TodoServer(){
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    
    app.all('*', (request, response) => {
        if(request.body.name){
            return response.sendStatus(status.CREATED);
        } else {
            return response.sendStatus(status.BAD_REQUEST);
        }
    });

    return app;
}

module.exports = {
    TodoServer
};
