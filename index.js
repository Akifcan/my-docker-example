const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST)
    .then(connected => {
        console.log("ok");
    }).catch(e => {
        console.log(e);
    })
const Book = mongoose.model('Book', { name: String });


const app = express()
app.enable('trust proxy')
const port = process.env.PORT || 3000
app.get('/', async (_, res) => {
    const books = await Book.find()
    res.send(books)
})
app.listen(port, () => {
    console.log(port)
})