// Server set up
const express = require('express');
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// packages
require('dotenv').config();
const fetch = require('node-fetch');

// API KEY for Google Books API - replace with personal API
// Instructions to generate Google API Key here: https://developers.google.com/books/docs/v1/using
// Once the API key is generated, create a local file '.env' and add this line to it with the API key:
// google_books="<INSERT API KEY HERE>"
// NOTE: you will also need to enable this API on the google cloud platform console
let google_books_api_key = process.env.google_books;


// Set port
app.set('port', 3000);    

// path to server
app.listen(app.get('port'), function(){
    console.log(`Express started on 127.0.0.1:${app.get('port')}; press Ctrl-C to terminate.`);
});

// routing
// Test route
app.get("/", function (req, res) {
    res.send("Hello World");
});

// // Return thumbnail from googlebooks api
app.get("/thumbnail/:isbn", async function (req, res) {
    let isbn = req.params.isbn;
    let url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + String(isbn) + '&key=' + google_books_api_key;
    const response = await fetch(url)
        .then(res => res.json());

    res.send(response.items[0].volumeInfo.imageLinks.thumbnail);
})