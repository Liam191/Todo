"use strict";
const express = require('express');
const status = require('http-status-codes');

function TodoServer(){
    const app = express();
    app.all('*', (request, response) => {
        return response.sendStatus(status.BAD_REQUEST);
    });

    return app;
}

module.exports = {
    TodoServer
};
