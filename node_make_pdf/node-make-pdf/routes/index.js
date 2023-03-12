var express = require('express');
var router = express.Router();
const pdfController = require('../feature/controllers/pdf.controller');

/* GET home page. */
router.get('/', pdfController.print);

module.exports = router;
