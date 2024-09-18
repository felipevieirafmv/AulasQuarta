var express = require('express');
var router = express.Router();
const db = require('../models')

const UserService = require("../services/userService")
const UserController = require("../controllers/userController")

const userService = new UserService(db.User);
const userController = new UserController(userService);

router.get('/', function(req, res, next) {
  res.send("Modulo de usuarios rodando.")
})

router.post('/newUser', async(req, res) => {
  userController.createUser(req, res);
})

router.get('/findAll', async(req, res) => {
  userController.findAllUsers(req, res)
})

router.get('/getUserById', async (req, res) => {
  userController.findUserById(req, res);
})

module.exports = router;
