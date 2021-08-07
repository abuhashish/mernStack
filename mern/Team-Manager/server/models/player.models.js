const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    Name: {
        type: String,
        minlength: [2, 'name should be bigger then 2'],
    },
    Position:{
        type: String,
    },
    status: {
        game1: {type: Number, default: 0},
        game2: {type: Number, default: 0},
        game3: {type: Number, default: 0}
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);