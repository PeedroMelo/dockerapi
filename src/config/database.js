const mongoose = require("mongoose");

const dbpath = process.env.MONGO_FULL_CONNECTION;

const connectDb = () => {
    return mongoose.connect(dbpath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDb;