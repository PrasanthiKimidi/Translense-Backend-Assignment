const express = require('express')
const route = express.Router()
const businessController = require('../controllers/businessControllers')


route.post('/businessRegistration',businessController.registerBusiness)
route.get('/getBusinessDetails/:id',businessController.getBusinessDetails)
route.get('/getOwnerById/:id',businessController.getOwnerById)
route.put('/updateBusiness/:id',businessController.updateBusiness)
route.post('/sendOtp',businessController.sendOtp)
route.post('/verifyOtp',businessController.verifyOtp)

module.exports = route