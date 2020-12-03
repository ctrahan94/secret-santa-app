const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userShema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema)