const express = require("express");

const OrderController = require("./controllers/OrderController");
const ProductController = require("./controllers/ProductController");

const routes = express.Router();

routes.get('/order', OrderController.findAll);
routes.get('/order/:id', OrderController.find);
routes.post('/order', OrderController.create);

routes.get('/product', ProductController.findAll);
routes.post('/product', ProductController.store);

module.exports = routes;