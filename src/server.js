const express  = require("express");
const routes   = require("./routes");
const mongoose = require("mongoose")

const dbpath = require("../config/database");

const app = new express();

const port = 3000;

mongoose.connect(dbpath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`);    
});