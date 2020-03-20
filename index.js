const dotenv = require('dotenv');
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

// Setup environmental variables
dotenv.config();

// Allow bodyParser in Express
app.use(express.json());

