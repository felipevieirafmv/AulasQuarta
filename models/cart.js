const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
    const Cart = sequelize.define('Cart',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull:false
        },
        userId:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {
                model: "User",
                key: "id"
            }
        }
    });

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

        Cart.belongsToMany(models.Product, { through: models.CartProduct });
    };

    return Cart;
};