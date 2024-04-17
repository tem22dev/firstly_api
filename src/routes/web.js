const express = require('express');
const router = express.Router();

const { homeController, userController } = require('../controllers/homeController');

router.get('/', homeController);
router.get('/user', userController);

module.exports = router;