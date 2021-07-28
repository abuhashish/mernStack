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