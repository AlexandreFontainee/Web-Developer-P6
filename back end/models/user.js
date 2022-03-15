const mongoose = require('mongoose');
require('mongoose-type-email');
// plug in pour vérifier qu'il n'existe qu'une seule adresse mail unique 
const uniqueValidator = require('mongoose-unique-validator');

const userSchemaMail = mongoose.Schema({

    email: {
        type : mongoose.SchemaType.email , required: true, unique: true
    },
    password: {
        type: String, required: [true, "veuillez saisir un mot de passe"]
    }
});

userSchemaMail.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchemaMail );