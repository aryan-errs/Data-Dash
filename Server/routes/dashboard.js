const router = require('express').Router();
const { getData,
    yearFilter,
    topicFilter,
    sectorFilter,
    regionFilter,
    sourceFilter,
    countryFilter } = require('../controller/dataHandler');


router.get('/', getData);
router.get('/year/:year', yearFilter);
router.get('/topic/:topic', topicFilter);
router.get('/sector/:sector', sectorFilter);
router.get('/region/:region', regionFilter);
router.get('/source/:source', sourceFilter);
router.get('/country/:country', countryFilter);


module.exports = router;