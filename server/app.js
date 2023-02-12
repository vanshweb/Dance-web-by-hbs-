const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// getting-started.js

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const fs = require("fs");
const bodyparser = require('body-parser');

// For serving static files
app.use("/static", express.static("static"));

// Set the template engine as hbs
app.set("view engine", "hbs");

// Set the views directory
app.set("../views", path.join(__dirname, "views"));

// Our hbs endpoint

app.get("/home", (req, res) => {
  res.status(200).render("index.hbs");
});

app.get("/about", (req, res) => {
    res.status(200).render("about.hbs");
  });
  app.get("/services", (req, res) => {
    res.status(200).render("services.hbs");
  });
  app.get("/class", (req, res) => {
    res.status(200).render("class.hbs");
  });
  app.get("/contact", (req, res) => {
    res.status(200).render("contact.hbs");
  });
  app.get("/sponsors", (req, res) => {
    res.status(200).render("sponsors.hbs");
  });


  // endpoint for courses
  app.get("/hiphop", (req, res) => {
    res.status(200).render("hiphop.hbs");
  });
  app.get("/belly", (req, res) => {
    res.status(200).render("belly.hbs");
  });
  app.get("/break", (req, res) => {
    res.status(200).render("break.hbs");
  });
  app.get("/salsa", (req, res) => {
    res.status(200).render("salsa.hbs");
  });
  app.get("/tap", (req, res) => {
    res.status(200).render("tap.hbs");
  });
  app.get("/folk", (req, res) => {
    res.status(200).render("folk.hbs");
  });
  app.get("/jazz", (req, res) => {
    res.status(200).render("jazz.hbs");
  })

  // saving data
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dance');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const dance = new mongoose.Schema({
    name: String,
    phone: String,
    gender: String,
    email: String,
    address: String
    
  });
  const Contact = mongoose.model('Kitten', dance);

  app.post('/', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.render('db.hbs')
    }).catch(()=>{
    res.status(400).send('item was not saved to the databse')
})})

 
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
