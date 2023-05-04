// express.Router class to create modular, mountable route handlers
const express = require("express");
const router = new express.Router()
const controller = require('../controllers/userController')
const upload = require('../multerconfig/storageConfig')
//logic define in controller
//routes
router.post('/user/register',upload.single('user_profile'),controller.userregister)


module.exports = router