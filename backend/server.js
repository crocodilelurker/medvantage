const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin:'*',
    credentials:true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'OK', time: new Date().toISOString() });
});


app.listen(PORT,() =>{
    console.log('Server is running on port', PORT);
})