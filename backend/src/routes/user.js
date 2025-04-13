const express = require('express')
const User = require('../models/user')

const router = new express.Router()

// Sign Up
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    //Await
    try {
        await user.save()
        // const token = await user.generateAuthToken()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})
// Sign Up

// Login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // const token = await user.generateAuthToken()
        res.send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})
// Login

// Update User (PUT /users/:id)

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['fullName', 'email', 'password', 'phone', 'city']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            res.status(404).send(user)
        }
        res.send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

// Update User (PUT /users/:id)

// Delete User (DELETE /users/:id)

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})
// Delete User (DELETE /users/:id)

//  Get User Details (GET /users/:id)

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.send(500).send(err)
    }
})
//  Get User Details (GET /users/:id)

// Get All Users (GET /users) (Bonus Task)

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})
// Get All Users (GET /users) (Bonus Task)


module.exports = router