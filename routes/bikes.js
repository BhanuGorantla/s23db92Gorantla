var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bikes', { title: 'Search Results - bikes' });
});

module.exports = router;
