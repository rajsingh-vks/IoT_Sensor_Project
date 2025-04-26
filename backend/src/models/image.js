const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const ImageModal = mongoose.model('Image', ImageSchema)

module.exports = ImageModal