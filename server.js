const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

require('dotenv').config();
const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FevBooks');

const bookDB = require('./Modules/Bookschema.js');
server.use(express.json());

const fevBooksHandler = bookDB.books;
const addBookHandler = bookDB.addbooks;
const deleteBookHandler = bookDB.deletebooks;
// const fevBooksHandler = require('./Modules/Bookschema.js');

//______________________________________// Routs \\______________________________________\\

//http://localhost:3001/books?userName=mohammad....
server.get('/books',fevBooksHandler);
// console.log(1111,fevBooksHandler());

// http://localhost:3001/books
server.post('/books',addBookHandler);

//http://localhost:3001/books?bookID=asd&userName=mohammad
server.delete('/books',deleteBookHandler);

//http://localhost:3001/



server.listen(PORT, () => {
    console.log('Server is Listening');
});
