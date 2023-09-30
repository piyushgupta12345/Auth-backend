const express = require("express");
const router = express.Router();

// import controllers
const {signup,login} = require("../controllers/Auth")

// define routes
router.post('/signUp', signup);
router.post('/login', login);

// export route
module.exports = router;