const { Author } = require('../models/authors.model');

module.exports.createAuthor = (request, response) => {
    const { Name } = request.body;
    Author.create({
        Name,

    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllAuthor = (request, response) => {
    Author.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
module.exports.updateAuthor =(request,response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}