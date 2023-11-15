var express = require('express');
const bike_controlers= require('../controllers/bike');
var router = express.Router();
/* GET costumes */
router.get('/', bike_controlers.bike_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', bike_controlers.bike_view_one_Page);

/* GET create costume page */
router.get('/create', bike_controlers.bike_create_Page);

router.get('/update', bike_controlers.bike_update_Page);

/* GET delete costume page */
router.get('/delete', bike_controlers.bike_delete_Page);