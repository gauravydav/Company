const express = require('express');
const mongoose = require('mongoose');
//ndQihJFt8rEKS3N3
//"mongodb+srv://gauravyadava963998:mkTQC7TI8RsGWqV9@cluster0.g55qhrv.mongodb.net/db1?retryWrites=true&w=majority"
const mongoURI = "mongodb+srv://gauravyadava963998:mkTQC7TI8RsGWqV9@cluster0.g55qhrv.mongodb.net/company?retryWrites=true&w=majority"
//mkTQC7TI8RsGWqV9
const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});
module.exports = db;