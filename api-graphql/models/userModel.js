let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        maxlength: 11
    },
    email: {
        type: String,
        match: /.+\@.+\..+/,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        
    }
})

module.exports = mongoose.model('User', userSchema);