const express = require('express');
const { registerUser, authUser, allUsers } = require("../controllers/UserController");

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.get('/alluser', allUsers);


module.exports = router;