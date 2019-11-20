const mongoose = require("mongoose");

const dbpath = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const connectDb = () => {
    return mongoose.connect(dbpath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDb;