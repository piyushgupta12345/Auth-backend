const bcrypt = require("bcrypt");

// import models
const User = require("../models/User")

exports.signup = async (req, res) => {
    try {
        // fetch data from req body
        const { name, email, password, role } = req.body;

        // check if user already exist
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "user already Exists"
                }
            )
        }

        // secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json(
                {
                    success: false,
                    message: 'Error in hashing Password'
                }
            )
        }

        // create entry for User
        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        res.status(200).json(
            {
                success: true,
                message: 'User Created Successfully'
            }
        )

    }
    catch (error) {
        console.error(err)
        res.status(500).json(
            {
                success: true,
                message: 'User cannot be registered, please try later',
            }
        )
    }
}