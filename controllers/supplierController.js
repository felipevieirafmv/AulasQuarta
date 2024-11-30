class SupplierController {
    constructor(SupplierService){
        this.supplierService = SupplierService
    }

    async createSupplier(req, res){
        const { name, cnpj, address } = req.body;

        try {
            const newSupplier = await this.supplierService.create(name, cnpj, address);
            res.status(200).json(newSupplier);
            res.send();
        } catch (error) {
            res.status(500).json({ error: "Ocorreu um erro ao criar o fornecedor."});
        }
    }

    async findAllSupplierss(req, res){
        try{
            const allSuppliers = await this.supplierService.findAll();
            res.status(200).json(allSuppliers);
        }
        catch(error){
            res.status(500)
                .json({ error });
        }
    }
}

module.exports = SupplierController
