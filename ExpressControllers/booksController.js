const models = require('../MongooseModels/shredbookModel.js');
const { Book } = models;
const booksController = {};

booksController.getBooks = (req, res, next) => {
  Book.find({}, (err, books) => {
    if (err){
      return next({
        log: "Error getting books in booksController.getBooks()",
        message: "Error getting books"
      });
    };
    res.locals.books = books;
    next();
  });
};

booksController.addBook = (req, res, next) => {
  const title = req.body;
  Book.create(title, (err, newBook) => {
    console.log(req.body.title);
    if (err){
      return next({
        log: "Error adding book in booksController.addBooks()",
        message: "Error adding book."
      });
    } else {
      res.locals.newBook = newBook;
      next();
    }
  });
};

booksController.deleteBook = (req, res, next) => {
  const {id} = req.params;
  Book.findByIdAndDelete({_id: {id}}, (err, deleted) => {
    if (err){
      return next({
        log: "Error deleting book in booksController.deleteBooks()",
        message: "Error deleting book."
      });
    }
    res.locals.deleted = deleted;
    next();
  });
};
  
module.exports = booksController;