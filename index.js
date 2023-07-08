require("dotenv").config();
const express = require('express');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || "8080";

mongoose
    .connect(process.env.CONNECTION_STRING, {})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log(e);
    });



app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});

