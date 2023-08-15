const { getUsers, createUser, singleUser, userLogin } = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get('/', getUsers);
userRouter.get('/user', singleUser);

userRouter.post('/', createUser);
userRouter.post('/login', userLogin);

module.exports = userRouter;