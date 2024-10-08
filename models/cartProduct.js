const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const CartProduct = sequelize.define('CartProduct', {
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    });

    CartProduct.associate = function(models) {
        CartProduct.belongsTo(models.Cart, { foreignKey: 'cartId' });
        CartProduct.belongsTo(models.Product, { foreignKey: 'productId' });
    };

    return CartProduct;
};
