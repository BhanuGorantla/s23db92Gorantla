var bike = require('../models/bike');
// List of all bike

// for a specific bike.
exports.bike_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: bike detail: ' + req.params.id);
};
// Handle bike create on POST.
exports.bike_create_post = exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bike();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle bike delete form on DELETE.
exports.bike_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: bike delete DELETE ' + req.params.id);
};
// Handle bike update form on PUT.
exports.bike_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: bike update PUT' + req.params.id);
};

exports.bike_view_all_Page = async function(req, res) {
    try{
    theCostumes = await bike.find();
    res.render('bikes', { title: 'Bikes Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

exports.bike_list = async function(req, res) {
    try{
    theCostumes = await bike.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };