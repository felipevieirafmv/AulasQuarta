const db = require('../models')

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, dataNasc, password){
        try{
            const newUser = await this.User.create({
                email,
                dataNasc,
                password
            })
            return newUser ? newUser : null
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = UserService
