var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bike_controller = require('../controllers/bike');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bike ROUTES ///
// POST request for creating a  bike.
router.post('/bike', bike_controller.bike_create_post);
// DELETE request to delete bike.
router.delete('/bike/:id', bike_controller.bike_delete);
// PUT request to update bike.
router.put('/bike/:id', bike_controller.bike_update_put);
// GET request for one bike.
router.get('/bike/:id', bike_controller.bike_detail);
// GET request for list of all bike items.
router.get('/bike', bike_controller.bike_list);


module.exports = router;