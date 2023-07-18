const mongoose = require('mongoose')

const animeSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: false
    },
    QtdeEpisodios: {
        type: Number,
        required: false
    },
    createAt:{
        type: Date,
        default: new Date()
    }
});

module.exports=mongoose.model('anime', animeSchema)