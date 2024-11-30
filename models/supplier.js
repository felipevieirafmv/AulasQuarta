const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Supplier = sequelize.define('Supplier',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        cnpj:{
            type: Sequelize.STRING,
            allowNull:false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    return Supplier;
};
