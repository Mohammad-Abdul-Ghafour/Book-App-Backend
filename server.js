const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
require('dotenv').config();

const PORT = process.env.PORT;
const fevBooksHandler = require('./Modules/Bookschema.js');

//______________________________________// Routs \\______________________________________\\

//http://localhost:3001/books?userName=mohammad....
server.get('/books',fevBooksHandler);

//http://localhost:3001/




server.listen(PORT, () => {
    console.log('Server is Listening');
});
