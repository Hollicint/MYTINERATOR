//mongoose connection
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const nodemailer = require("nodemailer");

//import encrytion JS file
const {caesarDecrypt, caesarEncrypt } = require('./Back-End/js/encryption');

//connection of path
const path = require('path');
const methodOverride = require('method-override');
const Itin = require('./back-end/models/itinerary');
const Flight = require('./back-end/models/flights');
const Account = require('./Back-End/models/accounts');
const bodyParser = require('body-parser');



//create the Express app
const app = express();

//getting image sent from account page to email
const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null,path.join(__dirname,'upload/'));},
        filename: function(request, file, cb){
            cb(null,file.originalname);
        }
});
const upload = multer({storage: storage});
module.exports = upload;
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth:{ user:'mytinerartor@gmail.com', pass:'myt1n3r47t0rP4ssW07224!'}
});

const { ConnectionPoolClosedEvent } = require("mongodb");
//connection of DB
const dbURI = "mongodb+srv://Group6:pQHbMkTRY2pdRq6G@mytin.hyrbvla.mongodb.net/MytinApp?retryWrites=true&w=majority&appName=mytin";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
/*app.use(express.static(path.join(__dirname, 'public'),{maxAge: 'id', etag:false}));
//app.use(express.static("public"));
*/
//retieve data from server
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/*
//Swagger
const swaggerJsDoc = require("swagger-jsdoc");
app.use("/destination", require("./routes/destination"));
//app.use("/users", require("./routes/user"));
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Destination API",
        version: "1.0.0",
        description: "A simple Express destination API",
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
        {
          url: "https://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
const swaggerUI = require("swagger-ui-express");
const specs = swaggerJsDoc(options);
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(specs, { explorer: true })
  );

*/


//Setting for view for ejs files
app.set("view engine", "ejs");
//Directory for EJS files
app.set('views', path.join(__dirname, 'front-end', 'Views'));

app.use(express.static(path.join(__dirname, 'front-end')));
//Directory for back-end files
//app.use(express.static(path.join(__dirname, 'back-end')));
app.use(express.static(path.join(__dirname, 'back-end', 'js')));
//Directory for back-end files
app.use(express.static(path.join(__dirname, 'front-end', 'css')));

//route and response
app.get("/", async (request, response) => {
var accounts = await Account.find();
response.render("index", { title: "Mytinerator Home", script: ['/index.js'], style: ['/style.css'], Account: accounts});
 /*main*/
});

app.post("/register", async (request, response) => {
    const details = {Name, Password, DateOfBirth, Email, DreamTrip, ContactNum} = request.body;
    //check if user exists
    const existingUser = await Account.findOne({Email: caesarEncrypt(details.Email)})
    if(existingUser) {
        return response.status(400).send('Email already in use.')
    } else {
        const newUser = new Account({
            Name: caesarEncrypt(details.Name), 
            Password: caesarEncrypt(details.Password), 
            DateOfBirth: details.DateOfBirth, 
            Email: caesarEncrypt(details.Email), 
            DreamTrip: details.DreamTrip, 
            ContactNum: details.ContactNum});
        newUser.save();
        return response.send('User added! Welcome, ')
    }
});

app.post("/login", async (request, response) => {
    const details = {Email, Password} = request.body;
    //check if user exists
    const existingUser = await Account.findOne({Email : caesarEncrypt(details.Email)})

    if(!existingUser) {
        return response.status(400).send('User does not exist.')
    }
    if (details.Password === existingUser.Password) {
        return response.send('User Signed in.')
    } else {
        return response.send('Password incorrect.')
    }
});

app.get("/budget", (request, response) => {
    response.render("budget", { title: "Mytinerator Budget Page", script: ['/budgetCal.js'], style: ['/style.css']});
});
//redirect
app.get("/budgeting", (request, response) => {
    response.render("budget", { title: "Mytinerator Budget page", script: ['/budgetCal.js'], style: ['/style.css']});
});
app.get("/accommodation", (request, response) => {
    response.render("accommodation", { title: "Mytinerator Accommodation", script: ['/accomm.js'], style: ['/style.css']});
});
app.get("/accommodation/:id", (request, response) => {
    const id = request.params.id;
    response.render("singleAccomm", { title: "Mytinerator Hotel", script: ['/accomm.js'], style: ['/style.css']});
});
//account

app.get("/account", (request, response) => {
    response.render("account", { title: "Mytinerator Account", script: ['/account.js'], style: ['/style.css']});
});
//
//app.post('/upload', upload.single('img'), (request, response) =>{
//    if(!request.file){
//        return response.status(400).send('No Image uploaded');
//    }
//    const mailOption={
//        from: 'mytinerartor@gmail.com',
//        to: 'mytinerartor@gmail.com',
//        subject: 'Account Image to Add',
//        Text: 'To be added to Users account page',
//        attachments:
//        [
//            {
//                 filename: request.file.originalname,
//                 path: request.file.path
//            }
//        ]
//    };
//
//    transporter.sendMail(mailOption, function(error, info){
//        if(error){
//            console.log(error);
//            response.status(500).send('Error email is sending');
//        }
//        else
//        {
//            console.log('Email has been sent: '+info.response);
//            fs.unlinkSync(request.file.path);
//            response.send('Image and Email has been sent');
//        }
//    })
//});

//Rentals page
app.get("/rentals", (request, response) => {
    response.render("rentals", { title: "Mytinerator Rentals", script: ['/rentals.js'], style: ['/style.css']});
});
//Contact page
app.get("/contact", (request, response) => {
    response.render("contact", { title: "Mytinerator Contact", script: ['/contact.js'], style: ['/style.css']}); 
    //response.render("contact", { title: "Mytinerator Contact", style: ['/style.css']});   
});

//Destination information page
app.get("/destination", (request, response) => {

    Flight.find()
    .then(result =>response.render("destination", { title: "Mytinerator Destination", script: ['/destination.js'], style: ['/APIStyle.css'], styleTwo: ['/style.css'], Flight: '' }))
    .catch(error => console.log(error));
});

app.post("/destination/flights", (request, response) => {
    let mongoFlight = [];
    let query = '';
    const flights = { destination, departure, departure_date } = request.body;

    const newDate = departure_date;
    Flight.find({ destination, departure, departure_date})
        .then((result) => {
            response.render("destination", { 
                title: "Mytinerator Destination", 
                script: ['js/destination.js'], 
                style: ['/APIStyle.css'], 
                styleTwo: ['/style.css'], 
                Flight: result 
            });
        })
        .catch((error) => {
            console.error("Error fetching flights:", error);
            response.status(500).send("Error fetching flights");
        });
});




app.post("/destination/flights", async (request, response) => {

    
    try {
        let flights = {}
        const { destination, departure, departure_date } = request.body;
        flights = await Flight.find({ destination: destination, departure: departure, departure_date: departure_date })
        .then(toString(flights))
        .then((result) => response.render("destination", { Flight: flights, title: "Mytinerator Destination", script: ['/destination.js'], style: ['/APIStyle.css'], styleTwo: ['/style.css'] }))
        .then(console.log(departure, departure_date,  destination))
        .then(console.log(flights))
    } catch (error) {
        console.log(error)
    }
});


// //itinerary  pageS

app.get("/itinerary", (request, response) => {
   // console.log("Request received for /itinerary");
    Itin.find()
        .then(result => {
            response.render("itinerary", { title: "Mytinerator itinerary", script: ['/itineraryJS.js'], style: ['/style.css'], styleTwo: ['/style.css'], Itin: result });
        })
        .catch(error => console.log(error));
});


app.get("/itinerary/:id", (request, response) => {
    const id = request.params.id;
    Itin.findById(id)
        .then(result => { response.set('Cache-Control', 'no-store'); response.render("singleItinerary", { itin: result, title: "Single Itinerary Details", script: ['/singleItinerary.js'], style: ['/style.css'], styleTwo: ['/style.css']  });})
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
        .then(result => res.redirect('/itinerary'))
        .catch(error => console.log(error));
});
app.post("/itinerary", (req, res) => {
    const itin = new Itin(req.body);
    itin.save()
        .then(result => res.redirect('/itinerary'))
        .catch(error => console.log(error));
});


//404 page
app.use((request, response) => {
    response.render("404", { title: "Mytinerator 404 page", script: [''], style: [''], styleTwo: [''] });
});

//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);