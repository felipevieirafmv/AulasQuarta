const db = require('../models')
const auth = require('../auth')

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, dataNasc, password){
        try{
            const newUser = await this.User.create({
                email,
                password,
                dataNasc
            })
            return newUser ? newUser : null
        }
        catch(error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allUsers = await this.User.findAll();
            return allUsers ? allUsers : null
        }
        catch(error){
            throw error;
        }
    }

    async findById(id){
        try {
            const User = await this.User.findByPk(id);
            return User ? User : null;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password){
        try {
            const User = await this.User.findOne({
                where: { email }
            });
            if(User){
                User.dataValues.token = await auth.generateToken(User);
                User.dataValues.password = "";
            }
            return User ? User : null
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService
