const express = require("express");
const router = express.Router();

// import controllers
const {signup,login} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth")

// define routes
router.post('/signUp', signup);
router.post('/login', login);

// testing protected routes for single middleware
router.get('/test', auth, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Test"
    })
})
// Protected route
router.get('/student', auth, isStudent, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Students"
    })
})

router.get('/admin', auth, isAdmin, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Admin"
    })
})

// export route
module.exports = router;