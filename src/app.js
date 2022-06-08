// const express = require('express');
import express  from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";
import productRoute from './routes/product'
import categoryRoute from './routes/category'

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// router
app.use('/api',productRoute)
app.use('/api',categoryRoute)

//connect db
mongoose.connect('mongodb://localhost:27017/node_angular')
.then(() => console.log("Success database"))
.catch((error) => console.log(error))

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})