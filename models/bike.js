const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
    minlength: [2, "Brand name must be at least 2 characters long"],
    maxlength: [50, "Brand name must not exceed 50 characters"],
  },
  color: String,
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a non-negative value"],
    max: [100000, "Price must be less than or equal to 100000"],
  },
});

module.exports = mongoose.model("car", carSchema);
