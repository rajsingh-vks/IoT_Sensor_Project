const express = require('express')
const router = new express.Router()
const upload = require("../middleware/multer")
const ImageModal = require("../models/image")

router.use(express.static('public'))

router.post('/upload', upload.single('file'), (req, res) => {
    ImageModal.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.get('/getImage', (req, res) => {
    ImageModal.find()
    .then(images => res.json(images))
    .catch(err => console.log(err))
})


module.exports = router