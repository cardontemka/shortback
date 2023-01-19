const express = require('express');
const { getUsers } = require("../controllers/userController");

const router = express.Router();

exports.userRoutes = router.get('/users', getUsers)