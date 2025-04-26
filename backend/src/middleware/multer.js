const multer = require('multer')
const express = require('express')
const router = express.Router();

const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({
    storage: storage
})

module.exports = upload