const express = require('express');
const admin = require('firebase-admin');
const mongoose = require('mongoose');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const fileRoutes = require('./routes/fileRoutes'); 

const app = express();
app.use(bodyParser.json());

// Firebase setup
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/healthdata', { useNewUrlParser: true, useUnifiedTopology: true });

// MySQL setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'healthdata'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Use routes
app.use('/data', dataRoutes);
app.use('/api', fileRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
