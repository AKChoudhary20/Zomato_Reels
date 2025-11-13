const foodPartnerModel=require('../models/foodpartner.model');
const userModel=require('../models/user.model');

const jwt=require('jsonwebtoken');

async function authFoodPartnerMiddleware(req,res,next){

    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"plese login firt"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET); //it will verify if the token is correct or not

        const foodPartner=await foodPartnerModel.findById(decoded.id); //in decoded now there is the data of token which is the foodpartner's id and we are getting the details of the foodpartner from our database

        req.foodPartner=foodPartner;  //we are creating new property in our request whose value is foodpartner

        next( ) //after the middleware the controller which we have applied this all logic will go there

    }
    catch(err){
        return res.status(401).json({
            message:"INVALID TOKEN"
        })
    }
}

async function authUserMiddleware(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"plese login firt"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user=await userModel.findById(decoded.id);

        req.user=user;

        next()
    }
    catch(err){
        return res.status(401).json({
            message:"INVALID TOKEN"
        })
    }
}

module.exports={
    authFoodPartnerMiddleware,
    authUserMiddleware
}