const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength: [6, 'Too few eggs'],
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);