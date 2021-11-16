const fs = require('fs');
const express = require('express')
const twig = require("twig");
const app = express()
const port = 3000
app.use(express.static('public'))


/*
let connection = require('./public/config/databases.js'); //Dit que nous avons besoin de databases.js qui contient la BDD

    connection.query("SELECT * FROM dan_glb_documents", function (err, result, fields) {

    app.get('/testy', function (req, res) {
        var resultat =JSON.stringify(result);
        res.send(resultat);
        console.log(resultat);
        res.render('testy.html.twig', {
           
        })
     
    });

});
*/

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


app.get('/implantometre', (req, res) => {
    res.render('implantometre.html.twig', {
        route : req.url
    })
})


app.get('/KB', (req, res) => {
    res.render('KB.html.twig',{

    })
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
