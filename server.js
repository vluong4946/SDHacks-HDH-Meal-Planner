const express = require('express')
const bodyParser = require('body-parser') //Middle-ware to handle input into <form>
const app = express()
const MongoClient = require('mongodb').MongoClient //database

//We will use Embedded JavaScript (ejs) as our template engine
//A template engine is ...
app.set('view engine', 'ejs')

//connect method to connect to MongoDB database
var db
MongoClient.connect('mongodb://vluong4946:91722Bluex@ds231723.mlab.com:31723/hdhnutrition', (err, client) => {
    //Handle error
    if(err) return console.log(err)

    db = client.db('hdhnutrition')

    //Deploy server once db is set up
    app.listen(3000, function() {
        console.log('listening on 3000')
    })
})

//urlencded tells body-parser to extreact data from <form> and add them to the body
//property in the request object.
app.use(bodyParser.urlencoded({extended: true}))


/**
 * When the user enters the '/' path of the website, the browser performs
 * a GET request to the server. The server sends back the stuff to display.
 */
app.get('/', (req, res) => {
    //Display the quotes stored in the database.
    //find: returns object containing quotes & other stuff
    //toArray: converts only the entries in the db to array. Accepts a callback to
    //allow us to do stuff with the array entries.
    //We pass it into index.ejs for us to display to the HTML.
    db.collection('Cafe_Ventanas').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('index.ejs', {Cafe_Ventanas: result}) //lol wut
    })
})

/**
 * Create a 'quotes' collection to store the quotes by using the string 'quotes'
 * while calling MongoDB's db.collection() method.
 * Use the .save() method to save the body of the request (the inputted quote)
 * to MonogoDB.
 * Then redirect the user back to '/' to refresh the page to display the quote.
 */
/*
app.post('/quotes', (req, res) => {
    db.collection('quotes').insertOne(req.body, (err, result) => {
        if(err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')

    })

})
*/



