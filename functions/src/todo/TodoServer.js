"use strict";
const express = require('express');

function TodoServer(){
    const app = express();
    app.all('*', (request, response) => {
        return response.sendStatus(400);
    });

    return app;
}

module.exports = {
    TodoServer
};