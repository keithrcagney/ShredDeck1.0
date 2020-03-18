const express = require('express');
const router = express.Router();

const booksController = require('../ExpressControllers/booksController')

//Books routes: get, post, delete
router.get('/', booksController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
});

router.post('/', booksController.addBook, (req, res) => {
  res.status(200).json(res.locals.newBook);
});

router.delete('/', booksController.deleteBook, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

module.exports = router;