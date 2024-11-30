const supplier = require("../models/supplier");

class SupplierService{
    constructor(SupplierModel){
        this.Supplier = SupplierModel;
    }

    async create(name, cnpj, address){
        try{
            const newSupplier = await this.Supplier.create({
                name,
                cnpj,
                address
            })
            return newSupplier ? newSupplier : null
        }
        catch(error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allSuppliers = await this.Supplier.findAll();
            return allSuppliers ? allSuppliers : null
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = SupplierService
