require('dotenv').config();
require('./config/DB/mongoose')
const express = require('express')
const cors = require('cors');
const userRouter = require('./routes/user');
const deviceRouter = require('./routes/device');
const deviceMangementRouter = require('./routes/deviceManagment');

const app = express()


app.use(cors());
app.use(express.json())

app.use('/api', userRouter)
app.use('/', deviceRouter)
app.use('/device', deviceMangementRouter)
// Port listing

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running on port =' + port)
})


// const bcrypt = require('bcryptjs')
// const myFunction = async() => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }


// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, process.env.JWT_SECRET, { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, process.env.JWT_SECRET)
//     console.log(data)
// }

// myFunction()