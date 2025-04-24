const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
})

const ImageModal = mongoose.model('Image', ImageSchema)

module.exports = ImageModal