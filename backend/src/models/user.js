const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email format is invalide')
            }
        }
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,

        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Invalid Phone number')
            }
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    // devices: [
    //     { 
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'Device', 
    //         default: [] 
    //     }
    // ],
    city: {
        type: String,
        required: true
    },
    // token: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

// We are using normal function because arrow function don't bind

// userSchema.method.generateAuthToken = async function () {
//     const user = this
//     const token = jwt.sign({ _id: user.id.toString() }, 'newCourse')

//     user.token = user.token.concat({ token })
//     await user.save()
//     return token
// }

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }
}

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const hash = await bcrypt.hash(this.password, 8);
            this.password = hash;
        }
        next();
    } catch (error) {
        next(error);
    }
});

// userSchema.pre('save', async function (next){
//    const user = this
// //    console.log('just before saving')
//    if(user.isModified('password')) {
//       user.password = await bcrypt.hash(user.password, 8)
//    }
//    next()
// })
// Mongoose model

const User = mongoose.model('User', userSchema)

module.exports = User