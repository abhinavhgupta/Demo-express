const logger = require('./logger')
const express = require('express')
const app = express()
const port = 3000

let books = ['Book1', 'Book2', 'Book3', 'Book4']

app.use(logger.log);

app.use(express.static('public'))

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/Home', (req, res) => res.send('<h1>Hello World!</h1>'))

app.get('/books', (req, res) => {
    var book = books.slice(0, req.query.num)
    res.send(book)
})

app.get('/books', (req, res) => {
    books = books.filter(book => book != req.body.book);
    res.send(books)
})

app.post('/books', function (req, res) {
    books.push(req.body.book)
    res.send(req.body)
})

app.delete('/books', function (req, res) {
    books = books.filter(book => book != req.body.book);
    res.send("Book deleted")
})

app.get('/books/:title', (req, res) => {
    let found = books.find(element => element == req.params.title)
    if (found) {
        res.send("Book is available")
    } else res.status(404).send("Book not found")
})

app.get('/customer', (req, res) => {
    let customer = {
        customerId: 123,
        customerName: 'Abhinav',
        customerContact: 2341234
    }
    res.send(customer)
})

app.get('/customers', (req, res) => {
    let customer = {
        customerId: 123,
        customerName: 'Abhinav',
        customerContact: 2341234
    }
    res.sendFile(__dirname + '/customers.json')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))