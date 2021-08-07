const { Player } = require('../models/player.models');

module.exports.createPlayer = (request, response) => {
    const { Name , Position} = request.body;
    Player.create({
        Name,Position

    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
module.exports.updatePlayer =(request,response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}