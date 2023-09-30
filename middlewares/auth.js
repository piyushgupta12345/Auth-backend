// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.auth = (req, res, next) =>{
    try {
        // extract JWT token
        // PENDING : other ways to fetch token
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            })
        }

        // verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            // why this ?
            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid",
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"something went wrong, while verifying the token",
        })
    }
}