const express = require("express");
//create the Express app
const app = express();
//listen for incoming requests
app.listen(3000);
//route and response
app.get("/", (request, response) => {
    response.sendFile("./Front-End/index.html", { root: __dirname });
});
app.get("/budget", (request, response) => {
    response.sendFile("./Front-End/budget.html", { root: __dirname });
});
//redirect
app.get("/budgeting", (request, response) => {
    response.redirect("/budget");
});
//404 page
app.use((request, response) => {
    response.status(404).sendFile("./Front-End/404.html", { root: __dirname });
});



//test terminal connection
//const sMessage = "Hello world";
//console.log(sMessage);
