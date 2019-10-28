const express = require("express");

const UserController = require("./controllers/UserController");
const SpotController = require("./controllers/SpotController");

const routes = express.Router();

routes.get('/users', UserController.index);

routes.get('/spots', SpotController.index);

module.exports = routes;