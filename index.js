const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const {  } = require('./routes');
const { userRoutes } = require("./routes");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080

app.use(express.json());
app.use(cors());
connect();

app.use(userRoutes)
 
app.get('/', (req, res) => {
    res.send('Wasup Word!')
})

app.listen(port, () => {
    console.log('Server running at:', port)
})