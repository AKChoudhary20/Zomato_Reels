const foodModel=require('../models/food.model');
const likeModel=require('../models/likes.model');
const saveModel=require('../models/save.model');
const storageService = require('../services/storage.service');
const {v4:uuid } = require("uuid");

async function createFood(req,res){

    const fileUploadResult= await storageService.uploadFile(req.file.buffer,uuid()) //file and fileName(uuid()) are required

    const foodItem=await foodModel.create({
        name:req.body.name,
        video:fileUploadResult.url,
        description:req.body.description,
        foodPartner:req.foodPartner._id
    })

    res.status(201).json({
        message:'Food item created successfully',
        food:foodItem
    })
}

async function getFoodItems(req,res){
    const foodItems=await foodModel.find({});
    res.status(200).json({
        message:'Food items fetched successfully',
        foodItems
    })
}


async function likeFood(req,res){
    const{foodId}=req.body;
    const user=req.user;

    const isAlreadyLiked=await likeModel.findOne({
        user:user._id,
        food:foodId
    });

    if(isAlreadyLiked){
        await likeModel.deleteOne({
            user:user._id,
            food:foodId
        });
        return res.status(200).json({
            message:"Food item unliked successfully"
        });
    }
    await foodModel.findByIdAndUpdate(foodId,{
        $inc:{likeCount:-1}
    });



    const like=await likeModel.create({
        user:user._id,
        food:foodId
    });
    
}

async function saveFood(req,res){
    const{foodId}=req.body;
    const user=req.user; 
    
    const isAlreadySaved=await saveModel.findOne({
        user:user._id,
        food:foodId
    });
    if(isAlreadySaved){
        await saveModel.deleteOne({
            user:user._id,
            food:foodId
        });
        await foodModel.findByIdAndUpdate(foodId,{
            $inc:{saveCount:-1}
        });

        return res.status(200).json({
            message:"Food item unsaved successfully"
        });
    }
    const save=await saveModel.create({
        user:user._id,
        food:foodId
    });
    await foodModel.findByIdAndUpdate(foodId,{
        $inc:{saveCount:1}
    });


    res.status(201).json({
        message:"Food item saved successfully"
    });
}

async function getSaveFood(req,res){  
    const user=req.user;

    const savedFoods=await saveModel.find({user:user._id}).populate("food");

    if(!savedFoods || savedFoods.length===0){
        return res.status(404).json({
            message:"No saved food items found"
        });
    }

    res.status(200).json({
        message:"Saved food items fetched successfully",
        savedFoods
    });
}

module.exports={
    createFood,
    getFoodItems
    ,likeFood
    ,saveFood
    ,getSaveFood
}

