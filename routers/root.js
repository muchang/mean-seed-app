var express = require('express');
var router = express.Router();

router.use('/', express.static(__dirname + '/../views'));

module.exports = router;
