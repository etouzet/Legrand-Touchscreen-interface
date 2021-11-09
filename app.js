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
    res.render('home.html.twig', {
        rout : req.url
    })
})

app.get('/test', (req, res) => {
    res.render('test.html.twig', {
        rout : req.url
    })
})


app.get('/pdf', (req, res) => {
    res.render('pdf.html.twig')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

