const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
// mongodb+srv://hafsabashir820:QmmhImyve1LPnwJ5@@cluster0.jb0hmyr.mongodb.net/test
const MONGODB_URI = 'mongodb+srv://hafsabashir820:hafsa@105105@cluster0.jb0hmyr.mongodb.net/dermate'; // Replace with your MongoDB Atlas connection string
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });


