const express  = require("express");
const routes   = require("./routes");

const connectDb = require("./config/database");

const app = new express();

const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, function() {
    console.log(`Server running on port ${port}`);    

    connectDb().then(() => {
        console.log('MongoDB connected');
    });
});