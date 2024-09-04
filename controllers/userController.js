class UserController {
    constructor(UserService){
        this.userService = UserService
    }

    async createUser(req, res){
        const { email, password, dataNasc } = req.body;

        try {
            const newUser = userService.create(email, password, dataNasc);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json({ error: "Ocorreu um erro"}, error)
        }
    }
}

module.exports = UserController
