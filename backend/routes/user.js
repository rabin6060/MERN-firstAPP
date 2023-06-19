const express = require('express')
const {UserLogin,UserRegister} = require('../controllers/userController')
const router = express.Router()


router.post('/login',UserLogin)
router.post('/signup',UserRegister)


module.exports = router