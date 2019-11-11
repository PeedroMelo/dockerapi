const Order = require("../models/Order");

module.exports = {

    async findAll(req, res) {
        const order = await Order.find().populate('products');
        return res.status(200).json(order);
    },

    async find(req, res) {
        const { id } = req.params;
        const order = await Order.findById(id).populate('products');
        return res.status(200).json(order);
    },

    async create(req, res) {
        const { description, value, status, products } = req.body;
        
        const order = await Order.create({
            date        : new Date,
            description : description,
            value       : value,
            status      : status,
            products    : products
        });

        await order.populate("products").execPopulate();

        return res.status(200).json(order);
    }
}