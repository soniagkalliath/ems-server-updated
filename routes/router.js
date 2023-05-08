// express.Router class to create modular, mountable route handlers
const express = require("express");
const router = new express.Router()
const controller = require('../controllers/userController')
const upload = require('../multerconfig/storageConfig')
//logic define in controller
//routes
router.post('/user/register',upload.single('user_profile'),controller.userregister)
router.get('/user/getallusers',controller.getallusers)
router.get('/user/view/:id',controller.viewUser)

module.exports = router