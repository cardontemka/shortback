const { User } = require("../models/userModel");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}