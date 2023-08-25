const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");

// get user
const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err)
    }
}

const userLogin = async (req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
        res.status(400).json({ message: "Phone number or password is required" });
        return;
    }
    try {
        const user = await userModel.findOne({ phone, password });
        if (!user) {
            res.json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ phone: user.phone }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).json({ user, token });
    } catch (err) {
        console.log(err)
    }
}

const singleUser = async (req, res) => {
    const { phone } = req.body;
    if (!phone) {
        res.status(400).json({ message: "Phone number is required" });
        return;
    }

    try {
        const user = await userModel.find({ phone });

        res.status(200).json({ user });
    } catch (err) {
        console.log(err)
    }
}

const createUser = async (req, res) => {
    const { id, name, email, phone, password } = req.body
    // check user phone already exist
    const user = await userModel.findOne({ phone: phone })
    if (user) {
        res.status(400).json({ message: "Phone number already exist" });
        return;
    }

    try {
        const result = new userModel({
            id: id,
            name: name,
            email: email,
            phone: phone,
            password: password
        });
        await result.save();

        const token = jwt.sign({ id: result.phone }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(201).json({ result, token });
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createUser,
    getUsers,
    singleUser,
    userLogin
}