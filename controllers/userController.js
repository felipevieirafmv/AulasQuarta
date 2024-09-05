class UserController {
    constructor(UserService){
        this.userService = UserService
    }

    async createUser(req, res){
        const { email, password, dataNasc } = req.body;

        try {
            const newUser = await this.userService.create(email, dataNasc, password);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json({ error: "Ocorreu um erro"})
        }
    }

    async findAll(req, res){
        try{
            const allUsers = await this.userService.findAll();
            res.status(200).json(allUsers);
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = UserController
