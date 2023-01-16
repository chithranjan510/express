const express = require('express')

const router = express.Router();

const userController = require('../controllers/user');

router.get('/users-list', userController.getUsersList);

router.post('/add-user', userController.addUser);

router.delete('/delete-user/:userId', userController.deleteUser);

module.exports = router;