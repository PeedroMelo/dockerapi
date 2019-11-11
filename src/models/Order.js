const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    date        : Date,
    description : String,
    value       : Number,
    status      : String,
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Product'
    }]
});

module.exports = mongoose.model('Order', OrderSchema);