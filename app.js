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

//Directory for Back-End files
app.use(express.static(path.join(__dirname, 'Front-End', 'css')));

//route and response
app.get("/", (request, response) => {
    response.render("index", { title: "Mytinerator Home", script: ['/JS/index.js'], style: ['/style.css'], styleTwo: ['loginStyle.css']});
});
app.get("/budget", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget Page", script: ['/JS/budgetCal.js'], style: ['/style.css'], styleTwo: ['']});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget page", script: ['/JS/budgetCal.js'], style: ['/style.css'], styleTwo: ['']});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator Accommodation", script: ['/JS/accomm.js'], style: ['/style.css'], styleTwo: ['']});
});
//account
app.get("/account", (request, response) => {
    response.render("account", { title: "Mytinerator Account", script: ['/JS/account.js'], style: ['/style.css'], styleTwo: ['']});
});
//Rentals page
app.get("/rentals", (request, response) => {
    response.render("rentals", { title: "Mytinerator Rentals", script: ['/JS/rentals.js'], style: ['/style.css'], styleTwo: ['']});
});
//Contact page
app.get("/contact", (request, response) => {
    response.render("contact", { title: "Mytinerator Contact", script: ['/JS/contact.js'], style: ['/style.css'], styleTwo: ['']});
});
//Destination information page
app.get("/destination", (request, response) => {
    response.render("destination", { title: "Mytinerator Destination", script: ['/JS/destination.js'], style: ['/APIStyle.css'], styleTwo: ['/style.css']});
});
//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page", script: [''], style: [''], styleTwo: ['']});
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
