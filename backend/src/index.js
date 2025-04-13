const express = require('express')
require('./config/DB/mongoose')

const userRouter = require('./routes/user')
// const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)

// Port listing

app.listen(port, () => {
    console.log('server is running on port =' + port)
})


const bcrypt = require('bcryptjs')
const myFunction = async() => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'newCourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'newCourse')
//     console.log(data)
// }

myFunction()