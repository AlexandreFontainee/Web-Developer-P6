const mongoose = require('mongoose');
const validator = require('../middleware/validator');

const sauceSchema = mongoose.Schema ({
    
    userId: {
        type : String,
        required: true,
    },

    name : {
        type : String,
        required : true,
        validate: validator.inputValidator
    },

    manufacturer : {
        type : String,
        required : true,
        validate: validator.inputValidator
    },

    description : {
        type : String,
        required : true
    },

    mainPepper : {
        type : String,
        required : true,
        validate: validator.inputValidator
    },

    imageUrl : {
        type : String,
        required : true
    },

    heat : {
        type : Number,
        required : true,
        min : 1,
        max : 10,
    },

    likes : {
        type : Number,
        required : true
    },

    dislikes : {
        type : Number,
        required : true
    },

    usersLiked : {
        type : [String],
        required : true
    },

    usersDisliked : {
        type : [String],
        required : true
    },


});

module.exports = mongoose.model("sauce", sauceSchema);