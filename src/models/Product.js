const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    description : String,
    value       : Number,
    sku         : String,
    brand       : String,
    size        : String,
    category    : String,
    weight      : Number,
    height      : Number
});

module.exports = mongoose.model('Product', ProductSchema);