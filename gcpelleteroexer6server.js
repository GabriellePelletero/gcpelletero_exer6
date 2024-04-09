//sets up Express server and connect to MongoDB Atlas

import express from 'express';
import studentRoutes from './gcpelleteroexer6router.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

//connect to MongoDB Atlas
mongoose.connect('mongodb+srv://gcpelletero:UrfvwFOmtgSpkgtN@cluster0.pcsniql.mongodb.net/StudentDatabase') 

app.use(express.json());


app.use('/', studentRoutes);

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});