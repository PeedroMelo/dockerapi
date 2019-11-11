const Product = require("../models/Product")

module.exports = {

    store(req, res) {
        const { description, value } = req.body;

        const product = Product.create({
           description : description,
           value       : value
        });

        return res.status(200).json(product);
    }
}