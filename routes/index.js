var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/acerca_de', function(req, res, next) {
  res.render('acerca_de', { title: 'Acerca de...'});
});

module.exports = router;
