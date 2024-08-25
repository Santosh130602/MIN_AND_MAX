const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/generatetoken');

const signup = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, accountType, contactNumber } = req.body;

    if (!firstName || !lastName || !email || !password || !accountType || !contactNumber) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        accountType,
        contactNumber,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accountType: user.accountType,
            contactNumber: user.contactNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accountType: user.accountType,
            contactNumber: user.contactNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = { signup, login };
