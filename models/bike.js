const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({name: String,color: String,price: Number});

module.exports = mongoose.model("bike",bikeSchema);