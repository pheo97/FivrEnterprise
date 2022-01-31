const express = require('express');
const app = express();
const serverless = require('serverless-http')
const ejsMate = require('ejs-mate')
const path = require('path')

app.set('view engine','ejs');
app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/.netlify/functions/index', app)

module.exports.handler = serverless(app)

app.get("/", (req,res) =>{
    res.render('home')
})

app.get("/properties", (req,res) =>{
    res.render('properties')
})
app.get("/contact" , (req,res) =>{
    res.render('contact')
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})