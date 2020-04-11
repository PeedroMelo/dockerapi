const Product = require("../models/Product")

module.exports = {

    async findAll(req, res) {
        const product = await Product.find();
        return res.status(200).json(product);
    },

    async find(req, res) {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json(product);
    },

    async store(req, res) {
        const { description, value } = req.body;

        const product = await Product.create({
           description : description,
           value       : value
        });

        return res.status(200).json(product);
    }
}