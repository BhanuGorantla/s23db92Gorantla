var express = require('express');
const bike_controlers= require('../controllers/bike');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET costumes */
router.get('/', bike_controlers.bike_view_all_Page );


/* GET detail costume page */
router.get('/detail', bike_controlers.bike_view_one_Page);

/* GET create costume page */
router.get('/create',secured, bike_controlers.bike_create_Page);

router.get('/update',secured, bike_controlers.bike_update_Page);

/* GET delete costume page */
router.get('/delete',secured, bike_controlers.bike_delete_Page);




 module.exports = router;