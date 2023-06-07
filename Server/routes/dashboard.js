const router = require('express').Router();
const { getData } = require('../controller/dataHandler');


router.get('/', getData);


module.exports = router;