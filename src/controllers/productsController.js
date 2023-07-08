
const productsModel = require('../models/productsModel');


exports.getProducts  =  async(req,res) => {

    const result = await productsModel.find({}).catch(err => {
        res.send(err.message);
    });

    res.send(result || "no products found");

}
    
exports.getProductById  =  async(req,res) => {
    
    const id = req.params.id;
    
    try {
        const result = await productsModel.findById({_id: id})
        res.send(result || "product not found");
    }
    catch (err) {
        res.send("wrong id format");
    }
    
}

exports.createProduct  =  async(req,res) => {

    const product = new productsModel(req.body);

    const result = await product.save().catch(err => {
        res.send(err.message);
    });

    res.send(result);

}

exports.updateProduct =  async(req,res) => {

    const id = req.params.id;

    try {
        const result = await productsModel.updateOne({_id: id }, req.body)
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}

exports.deleteProduct  =  async(req,res) => {
    
    const id = req.params.id;

    try {
        const result = await productsModel.deleteOne({_id: id })
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
       
}







