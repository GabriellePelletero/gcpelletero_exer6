//sets up Express server and connect to MongoDB Atlas

import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import router from './gcpelleteroexer6router.js';   // import the router function
router(app);

app.listen(3000);