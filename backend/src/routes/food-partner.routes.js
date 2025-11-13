const express = require('express');
const  authMiddleware  = require('../middleware/auth.middleware');
const foodPartnerController = require('../controller/food-partner.controller');

const router = express.Router();

// api/food-partner/:id
router.get("/:id", authMiddleware.authUserMiddleware, foodPartnerController.getFoodPartnerById);

module.exports = router; 

