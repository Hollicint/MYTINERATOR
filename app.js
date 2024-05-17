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

//route and response
app.get("/", (request, response) => {
    response.render("index", { title: "Mytinerator Home"});
});
app.get("/budget", (request, response) => {
    response.render("budget", { title: "Mytinerator budget page"});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("budget", { title: "Mytinerator budget page"});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator accommodation page"});
});
//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page"});
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
