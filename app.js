const express = require("express");
//create the Express app
const app = express();

const path = require('path');

//listen for incoming requests
app.listen(3000);

//Setting for view for ejs files
app.set("view engine", "ejs");

//Directory for EJS files
app.set('views', path.join(__dirname,'Front-End', 'Views'));
app.use(express.static(path.join(__dirname,'front-end')));

//Directory for Back-End files
app.use(express.static(path.join(__dirname, 'Back-End')));

//route and response
app.get("/", (request, response) => {
    response.render("index", { title: "Mytinerator Home", script: ['/JS/index.js']});
});
app.get("/budget", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget Page", script: ['/JS/budgetCal.js']});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget page", script: ['/JS/budgetCal.js']});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator Accommodation", script: ['/JS/accomm.js']});
});
//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page", script: ['']});
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
