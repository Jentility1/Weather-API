const express = require('express')
const app = express();
const mongoose = require('moongose')
PORT = 3000;

DB_URL = 'mongodb://27017/weather'

mongoose.connect(DB_URL);
const conn = mongoose.connection;

