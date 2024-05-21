const express = require("express");
//create the Express app
const app = express();

const path = require('path');
const { Script } = require("vm");

//listen for incoming requests
app.listen(3000);

//Setting for view for ejs files
app.set("view engine", "ejs");

//Directory for EJS files
app.set('views', path.join(__dirname,'Front-End', 'Views'));

//Directory for Back-End files
app.use(express.static(path.join(__dirname, 'Back-End')));

//route and response
app.get("/", (request, response) => {
    response.render("index", { title: "Mytinerator Home", script: ['/JS/ScriptIndex.js']});
});
app.get("/budget", (request, response) => {
    response.render("budget", { title: "Mytinerator budget page", script: ['/JS/ScriptBudget.js']});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("budget", { title: "Mytinerator budget page", script: ['/JS/ScriptBudget.js']});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator accommodation page", script: ['/JS/ScriptAccomm.js']});
});
//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page"});
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
