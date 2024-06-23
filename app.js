//mongoose connection
const mongoose = require("mongoose");
const Itin = require('./back-end/models/itinerary');
const Flight = require('./back-end/models/flights');
const express = require("express");
const bodyParser = require('body-parser');

//connection of path
const path = require('path');
const methodOverride = require('method-override');
const { ConnectionPoolClosedEvent } = require("mongodb");
//connection of DB
const dbURI = "mongodb+srv://Group6:pQHbMkTRY2pdRq6G@mytin.hyrbvla.mongodb.net/MytinApp?retryWrites=true&w=majority&appName=mytin";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));

//create the Express app
const app = express();

app.use(bodyParser.json());

app.use(express.static("public"));
//retieve data from server
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//Setting for view for ejs files
app.set("view engine", "ejs");
//Directory for EJS files
app.set('views', path.join(__dirname, 'Front-End', 'Views'));
app.use(express.static(path.join(__dirname, 'front-end')));
//Directory for Back-End files
app.use(express.static(path.join(__dirname, 'Back-End')));
//Directory for Back-End files
app.use(express.static(path.join(__dirname, 'Front-End', 'css')));

//route and response
app.get("/", (request, response) => {
/*#####################

Feature/itinerary_Page_&_DB-Connection

commented this line out because was giving problems with the connection

*/
response.render("index", { title: "Mytinerator Home", script: ['/js/index.js'], style: ['/style.css']});
 /*main*/
});
app.get("/budget", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget Page", script: ['/js/budgetCal.js'], style: ['/style.css']});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("Budget", { title: "Mytinerator Budget page", script: ['/js/budgetCal.js'], style: ['/style.css']});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator Accommodation", script: ['/js/accomm.js'], style: ['/style.css']});
});
//account
app.get("/account", (request, response) => {
    response.render("account", { title: "Mytinerator Account", script: ['/js/account.js'], style: ['/style.css']});
});
//Rentals page
app.get("/rentals", (request, response) => {
    response.render("rentals", { title: "Mytinerator Rentals", script: ['/js/rentals.js'], style: ['/style.css']});
});
//Contact page
app.get("/contact", (request, response) => {
    response.render("contact", { title: "Mytinerator Contact", script: ['/js/contact.js'], style: ['/style.css']});
});

//Destination information page
app.get("/destination", (request, response) => {
    Flight.find()
    .then(result =>response.render("destination", { title: "Mytinerator Destination", script: ['/js/destination.js'], style: ['/APIStyle.css'], styleTwo: ['/style.css'], Flight: '' }))
    .catch(error => console.log(error));
});

app.post("/destination/flights", async (request, response) => {
    try {
    const { destination, departure, departure_date } = request.body;
     Flight.find({ destination: destination, departure: departure, departure_date: departure_date })
    .then((result) => response.render("destination", { title: "Mytinerator Destination", script: ['/js/destination.js'], style: ['/APIStyle.css'], styleTwo: ['/style.css'], Flight: result }))
    
    } catch (error) {
        console.log(error)
    }
});


// //itinerary  pageS

app.get("/itinerary", (request, response) => {
    Itin.find().then((result) => { response.render("itinerary", { title: "Mytinerator Itinerary", script: ['/JS/itineraryJS.js'], style: ['/style.css'], styleTwo: ['/style.css'], Itin: result }); })
        .catch((error) => console.log(error));
});

app.get("/itinerary/:id", (request, response) => {
    const id = request.params.id;
    Itin.findById(id)
        .then(result => response.render("singleItinerary", { itin: result, title: "Single Itinerary details",script: ['/JS/singleItinerary.js'], style: ['/style.css'], styleTwo: ['/style.css']  }))
        .catch((error) => console.log(error));
});

app.delete("/itinerary/:id", (request, response) => {
    const id = request.params.id;
    Itin.findByIdAndDelete(id).then((result) => { response.json({ redirect: "/itinerary" }) })
        .catch((error) => console.log(error));
})
app.put("/itinerary/:id", (req, res) => {
    const id = req.params.id;
    Itin.findByIdAndUpdate(id, req.body, { new: true })
        .then(result => res.redirect(`/itinerary`))
        .catch(error => console.log(error));
});
app.post("/itinerary", (req, res) => {
    const itin = new Itin(req.body);
    itin.save()
        .then(result => res.redirect("/itinerary"))
        .catch(error => console.log(error));
});


//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page", script: [''], style: [''], styleTwo: [''] });
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
