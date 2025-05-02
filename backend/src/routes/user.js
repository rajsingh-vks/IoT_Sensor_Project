const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// Sign Up
router.post('/users/signup', async (req, res) => {
    const user = new User(req.body)

    //Await
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (err) {
        res.status(400).send(err)
    }
})
// Sign Up

// Login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (err) {
        res.status(400).send(err)
    }
})

// router.post('/users/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).send({ error: 'Email and password are required.' });
//     }

//     try {
//         const user = await User.findByCredentials(email, password);
//         const token = await user.generateAuthToken();

//         // Remove sensitive data before sending
//         const userPublic = user.toObject();
//         delete userPublic.password;
//         delete userPublic.tokens; // if using token array

//         res.send({ user: userPublic, token });
//     } catch (err) {
//         res.status(400).send({ error: 'Unable to login. Check credentials.' });
//     }
// });

// Login


// Logout
// router.post('/user/logout', auth, async (req, res) => {
//     const token = localStorage.getItem('token');

//     try {
//         // Remove the current token from the user's token list
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })

//         // Save the updated user to the database
//         await req.user.save()

//         // Send a success response

//         return res.send({ message: 'Logged out successfully' });

//     } catch (err) {
//         return res.status(500).send({ error: 'Logout failed' });
//     }
// })

router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
        await req.user.save();
        res.send({ message: 'Logged out successfully' });
    } catch (err) {
        console.error('Logout route failed:', err);
        res.status(500).send({ error: 'Logout failed' });
    }
});
// Logout

// Logout from all device
// router.post('/users/logoutAll', auth, async (req, res) => {
//     try {
//         req.user.tokens = []
//         await req.user.save()
//         res.send()
//     } catch (err) {
//         return res.status(500).send(err);
//     }
// })

// router.post('/users/logoutAll', auth, async (req, res) => {
//     try {
//         // if (!req.user) {
//         //     return res.status(401).send({ error: 'Not authenticated' });
//         // }

//         req.user.tokens = []
//         await req.user.save()
//         res.status(200).send({ message: 'Logged out from all sessions' });

//     } catch (err) {
//         res.status(500).send({ error: 'Logout failed' });
//     }
// })
// Logout from all device

// Update User (PUT /users/:id)

router.patch('/users/:id', auth, async (req, res) => {
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

// router.delete('/users/me', auth, async (req, res) => {
//     try {
//         await req.user.remove()
//         res.send(req.user)
//     } catch (err) {
//         res.status(500).send(err)
//     }
// })
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
    // res.send(req.user)
    try {
        const users = await User.find({})
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})
// Get All Users (GET /users) (Bonus Task)


module.exports = router