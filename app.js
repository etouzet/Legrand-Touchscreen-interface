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


var data =fs.readFileSync('./public/media/IntroNetKit.pdf','utf8') 
app.get('/', (req, res) => {
    res.render('test.html.twig', {
        'nom' : "toto",
        'num' : [
            "One",
            "Two"
        ]
    })
})

app.get('/pdf', (req, res) => {
    res.render('pdf.html.twig', {
        'nom' : "test",
    })
})
     

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
