const fs = require('fs');
const express = require('express')
const twig = require("twig");
const app = express()
const port = 3000
app.use(express.static('public'))

app
    .set('views', 'templates')
    .set('twig options', { autoescape: true })
    .set('views engine', 'html')
    //.engine('html', twig.__express);

app.get('/', (req, res) => {
    res.render('home.html.twig')
})

var data =fs.readFileSync('./public/media/PetitTheoRR#4.pdf','utf8')
app.get('/pdf', (req, res) => {
    res.render('pdf.html.twig', { 
        'num' : res.sendFile(__dirname + "/public/media/PetitTheoRR#4.pdf")
    })
})

app.get('/clavier', (req, res) => {
    res.render('clavier.html.twig')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})