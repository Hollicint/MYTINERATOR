const express = require("express");
//create the Express app
const app = express();

const path = require('path');

//listen for incoming requests
app.listen(3000);

//Setting for view for ejs files
app.set("view engine", "ejs");

//Directory for EJS files
app.set('views', path.join(__dirname,'front-end', 'Views'));
app.use(express.static(path.join(__dirname,'front-end')));
app.use('/js', express.static(path.join(__dirname,'back-end')));

//route and response
app.get("/", (request, response) => {
    response.render("index", { title: "Mytinerator Home"});
});
app.get("/budget", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget Page"});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget page"});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator Accommodation page"});
});
//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page"});
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
