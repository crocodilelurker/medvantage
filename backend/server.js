const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const response = require('./middleware/response.js')
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
app.use(response);


mongoose.connect(process.env.MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 8000;
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'OK', time: new Date().toISOString() });
});


app.listen(PORT,() =>{
    console.log('Server is running on port', PORT);
})