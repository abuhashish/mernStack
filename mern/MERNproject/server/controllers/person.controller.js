const { Product } = require('../models/person.model');

module.exports.createProduct = (request, response) => {
    const { Title, Price,Desc } = request.body;
    Product.create({
        Title,
        Price,
        Desc
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}