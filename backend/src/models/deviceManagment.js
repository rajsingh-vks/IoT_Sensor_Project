const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const DeviceModel = mongoose.model('Device', DeviceSchema)

module.exports = DeviceModel