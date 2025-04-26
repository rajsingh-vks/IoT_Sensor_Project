const express = require('express')
const router = new express.Router()
const upload = require("../middleware/multer")
const ImageModal = require("../models/image")

router.use('/Images', express.static('public/Images'))

router.post('/upload', upload.single('file'), async (req, res) => {
    // const { name, location } = req.body;

    // ImageModal.create({
    //     name: name,
    //     image: req.file.filename,
    //     location: location
    // })
    //     .then(result => res.json(result))
    //     .catch(err => console.log(err))

    try {
        const { name, location } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const newImage = await ImageModal.create({
            name: name || '',
            image: req.file.filename,
            location: location
        });

        res.status(201).json(newImage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
})

router.get('/getImage', (req, res) => {
    ImageModal.find()
        .then(images => res.json(images))
        .catch(err => console.log(err))
})


module.exports = router