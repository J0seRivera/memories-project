import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:"30mb", extend: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extend: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extend: true}));

const CONNECTION_URL = 'mongodb+srv://mongoAdmin:321123@cluster0.ws4rq.gcp.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> app.listen(PORT,()=> console.log(`Server running on: ${PORT}` )))
  .catch((error) => console.log(error.message))

//mongoose.set('useFindAndModify', false)
