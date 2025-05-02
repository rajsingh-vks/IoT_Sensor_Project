const express = require('express')
const router = new express.Router()
const DeviceModel = require("../models/deviceManagment")

router.post('/post', async (req, res) => {
    try {
        const { name, location, description } = req.body;
        const newDevice = await DeviceModel.create({
            name,
            location,
            description
        });

        res.status(201).json(newDevice);
    } catch (error) {
        // console.error("Device POST Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
})

// router.get('/get', (req, res) => {
//     DeviceModel.find()
//         .then(device => res.json(device))
//         .catch(err => console.log(err))
// })

router.get('/get', async (req, res) => {
    try {
        const devices = await DeviceModel.find();
        // res.status(200).json(devices);
        res.json(devices);

    } catch (error) {
        console.error("Get Devices Error:", error);
        res.status(500).json({ error: 'Failed to fetch devices' });
    }
});

router.delete('/get/:id', async (req, res) => {
    try {
        const device = await DeviceModel.findByIdAndDelete(req.params.id)
        if (!device) {
            res.status(404).send()
        }
        res.send(device)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/get/:id', async (req, res) => {
    try {
        const updatedDevice = await DeviceModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.send(updatedDevice);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router