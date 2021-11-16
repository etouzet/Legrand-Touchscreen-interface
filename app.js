const fs = require('fs');
const express = require('express')
const twig = require("twig");
const app = express()
const port = 3000
app.use(express.static('public'))


let connection = require('./public/config/databases.js'); //Dit que nous avons besoin de databases.js qui contient la BDD

connection.connect(function(err) {
    connection.query("SELECT * FROM dan_glb_documents", function (err, result, fields) {
      console.log(result); 
    });
  });
//Permet de connecter la base de données et d'afficher toutes les données de dan_glb_documents

app
    .set('views', 'templates')
    .set('twig options', { autoescape: true })
    .set('views engine', 'html')
    //.engine('html', twig.__express);
    
app.get('/', (req, res) => {
    res.render('home.html.twig', {
        route : req.url
    })
})

app.get('/test', (req, res) => {
    res.render('test.html.twig', {
        route : req.url
    })
})

app.get('/pdf', (req, res) => {
    res.render('pdf.html.twig',{
        
    })   
})

app.get('/cpp', (req, res) => {
    res.render('cpp.html.twig',{
        route : req.url
    })
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})