const cart = require("../models/cart");
const product = require("../models/product");
const user = require("../models/user");
const cartProduct = require("../models/cartProduct");

class CartService{
    constructor(CartModel, CartProductModel){
        this.Cart = CartModel;
        this.CartProduct = CartProductModel;
    }

    async create(userId){
        try{
            const newCart = await this.Cart.create({
                userId
            })
            return newCart ? newCart : null
        }
        catch(error){
            throw error;
        }
    }

    async addProduct(userId, productId, quantity){
        try {
            const cart = await this.Cart.findOne({
                where: { userId }
            });
            const addedItem = await this.CartProduct.create({
                cartId: cart.id,
                productId,
                quantity
            })

            return addedItem ? addedItem : null;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CartService
