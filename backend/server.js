const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000
dotenv.config();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'password-manager';

client.connect();

// Get All the Passwords
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save Password
app.post('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.insertOne(req.body);
  res.json({ success: true, result: result });
});

// Delete Password
app.delete('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.deleteOne(req.body);
  res.json({ success: true, result: result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})