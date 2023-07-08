
const usersModel = require('../models/usersModel');


exports.getUsers  =  async(req,res) => {

    const result = await usersModel.find({}).catch(err => {
        res.send(err.message);
    });

    res.send(result || "no users found");

}
    
exports.getUserById  =  async(req,res) => {
    
    const id = req.params.id;
    
    try {
        const result = await usersModel.findById({_id: id})
        res.send(result || "user not found");
    }
    catch (err) {
        res.send("wrong id format");
    }
    
}

exports.createUser  =  async(req,res) => {

    const user = new usersModel(req.body);

    const result = await user.save().catch(err => {
        res.send(err.message);
    });

    res.send(result);

}

exports.addProductToUser  =  async(req,res) => {

    const userId = req.params.userId;
    const productId = req.params.productId;

    try {
        const result = await usersModel.updateOne({_id: userId }, { $addToSet: { products: productId } })
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }

}

exports.updateUser =  async(req,res) => {

    const id = req.params.id;

    try {
        const result = await usersModel.updateOne({_id: id }, req.body)
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}

exports.deleteUser  =  async(req,res) => {
    
    const id = req.params.id;

    try {
        const result = await usersModel.deleteOne({_id: id })
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
       
}







