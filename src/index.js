//yarn init -y <-- this is like npm init
//yarn add express jest @types/jest <--  this also helps auto complete the words for you as well as show the declaration of the functions available with jest
//yarn watch is like nodemon now 

const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (request,response) => {
    response.send("Hello Darkness")
})



module.exports = app;