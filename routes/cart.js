var express = require('express');
var router = express.Router();
const db = require('../models')
const auth = require("../auth")

const CartService = require("../services/cartService")
const CartController = require("../controllers/cartController")

const cartService = new CartService(db.Cart, db.CartProduct);
const cartController = new CartController(cartService);

router.get('/teste', function (req, res, next) {
	res.send("Modulo do carrinho rodando.")
})

router.post('/add', auth.verifyToken, async (req, res) => {
	cartController.addProduct(req, res);
})

module.exports = router;
