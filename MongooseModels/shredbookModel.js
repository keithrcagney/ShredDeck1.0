const mongoose = require('mongoose');
const MONGO_URI =  'mongodb+srv://keithrcagney:balogna@kcagcluster-uftij.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'shredbook'
  })
  .then(() => console.log('Connected to shredbooks database.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  // row: Number
});

const Book = mongoose.model('Book', bookSchema);

const shredSchema = new Schema({
  book_id: {type: Schema.Types.ObjectId, ref: 'books'},
  shreds: Array
});

const Shred = mongoose.model('Shred', shredSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Book,
  Shred
};
