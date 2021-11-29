const UserRoutes = require('express').Router();
const { createUser } = require('../controllers/UserControllers');

UserRoutes.post('/api/users', createUser)

module.exports = UserRoutes;