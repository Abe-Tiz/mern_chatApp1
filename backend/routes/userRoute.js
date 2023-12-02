const express = require('express');
const { registerUser, authUser, allUsers } = require("../controllers/UserController");
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers); 
router.post('/login', authUser); 
// router.get('/alluser', allUsers);


module.exports = router;