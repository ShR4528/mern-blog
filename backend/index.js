const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
app.use(express.json());

const authRoute = require('./routes/auth');


// mongoose.connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Database connected'))
//     .catch((err) => console.log(err));

app.use('/auth', authRoute);
app.listen('5000', () => {
    console.log('backend is running...');
});


