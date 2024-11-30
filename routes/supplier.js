var express = require('express');
var router = express.Router();
const db = require('../models')
const auth = require("../auth")

const SupplierService = require("../services/supplierService")
const SupplierController = require("../controllers/supplierController")

const supplierService = new SupplierService(db.Supplier);
const supplierController = new SupplierController(supplierService);

router.get('/teste', function (req, res, next) {
	res.send("Modulo de fornecedor rodando.")
})

router.post('/', auth.verifyToken, async (req, res) => {
	supplierController.createSupplier(req, res);
})

router.get('/', auth.verifyToken, async (req, res) => {
	supplierController.findAllSupplierss(req, res)
})

module.exports = router;
