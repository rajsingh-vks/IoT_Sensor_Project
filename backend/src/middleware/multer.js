const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'public/Images')
    },
    filename: (req, file, cd) => {
        cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload