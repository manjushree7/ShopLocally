const express = require('express');
const mongoose = require('mongoose');
const Admin = require('./models/admin');
const customer = require('./models/customer');
const stallowner =require('./models/stallowner')
require('dotenv').config();

const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourDatabaseName';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
