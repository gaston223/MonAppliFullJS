//Les Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definition du schema
const userSchema = new Schema({
    username: {
        type: String,
        required: `Le nom de l'utilisateur est obligatoire`,
        unique: true,
    },
    email:{
        type: String,
        required: `L'email est obligatoire`,
        unique:true,
    },

    password :{
        type: String,
        required: `Le mot de passe est obligatoire`,
    },
    firstName: String,
    lastName: String
})

//Definition du modèle
const User = mongoose.model('User', userSchema);
module.exports.User = User;