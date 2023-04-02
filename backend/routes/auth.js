const router = require("express").Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');

// Register 
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword, // hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        console.log(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        // if user is not found
        !user && res.status(400).json('Wrong credentials!');

        // if user same as req.body.username
        const validated = await bcrypt.compare(req.body.password, user.password);
        // if password is not valid
        !validated && res.status(400).json('Wrong credentials!');

        // if password is valid
        const { password, ...others } = user._doc;
        res.status(200).json(others);


    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;