const mongoose = require("mongoose");

const dbpath = "mongodb+srv://aircnc:aircnc2019@aircnc-cu8jq.mongodb.net/aircnc?retryWrites=true&w=majority";

const connectDb = () => {
    return mongoose.connect(dbpath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDb;