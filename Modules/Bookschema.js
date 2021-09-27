'use strict';

//__________________________________// Mongo DB \\ __________________________________\\
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FevBooks');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    email: String
});

const bookModel = mongoose.model('book', bookSchema);


//__________________________________// Functions \\ __________________________________\\

// Mongo Functions \\
// function saveData() {
//     const book1 = new bookModel({
//         title: 'The Lord of the Rings',
//         description: 'Middle Earth is a wonderful, expansive fantasy world filled with turmoil, heroes, evil and innocence. Although our protagonist Frodo Baggins’ quest seems impossible to complete, this trilogy is a tale of triumph in the most impossible circumstances.',
//         status: true,
//         email: 'mohammad1478971539@gmail.com'
//     });
//     const book2 = new bookModel({
//         title: 'The Great Gatsby',
//         description: 'Published in 1925, Fitzgerald’s The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love.',
//         status: false,
//         email: 'mohammad1478971539@gmail.com'
//     });
//     const book3 = new bookModel({
//         title: 'To Kill a Mockingbird',
//         description: 'Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century. Humour entwines the delicate strands of prejudice, hatred, hypocrisy, love and innocence to create one of the best novels ever written.',
//         status: false,
//         email: 'anyone241@gmail.com'
//     });
//     book1.save();
//     book2.save();
//     book3.save();
// }

// saveData();

function fevBooksHandler(req, res) {
    let userName = req.query.userName;
    bookModel.find({email:userName}, function (error, data) {
        if (error) {
            console.log('error in getting data', error);
        } else {
            res.send(data);
        }
    });
}

module.exports = fevBooksHandler;
