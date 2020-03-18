const express = require('express');
const router = express.Router();
const shredsController = require('../ExpressControllers/shredsController.js')

// Shreds routes: get, post, delete
router.get('/', shredsController.getShreds, (req, res) => {
  res.status(200).json();
});

router.post('/', shredsController.addShred, (req, res) => {
  res.status(200).json();
});

router.delete('/', shredsController.deleteShred, (req, res) => {
  res.status(200).json();
});

module.exports = router;