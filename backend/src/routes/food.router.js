const express=require('express')
const foodController=require('../controller/food.controller');
const authMiddleware=require('../middleware/auth.middleware');
const router=express.Router()

const multer = require('multer');

const upload=multer({storage:multer.memoryStorage()});


//POST /api/food/ [protected]-->this api is used to add fooditem in your database
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood)

//GET /api/food/ [protected]-->this api is used to get all fooditems in your database
router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItems)

//POST /api/food/like [protected]-->this api is used to like a food item
router.post('/like',authMiddleware.authUserMiddleware,foodController.likeFood)

router.post('/save',authMiddleware.authUserMiddleware,foodController.saveFood)

router.get('/save',authMiddleware.authUserMiddleware,foodController.getSaveFood)

module.exports=router
