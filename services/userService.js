const db = require('../models')

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
            console.log(error)
        }
    }

    async findAll(){
        try{
            const allUsers = await this.User.findAll();
            return allUsers ? allUsers : null
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = UserService
