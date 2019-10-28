const Spot = require("../models/Spot");

module.exports = {
    async index(req, res) {
        const { tech } = req.query;
        const spots = await Spot.find({ tech });
        return res.json(spots)
    }
}