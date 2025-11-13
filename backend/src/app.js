//create server
const express = require('express')
const cookieParser=require('cookie-parser');//token banane ke liye jsonwebtoken use hota hai aur token save hota hai cookie ke andar aur uske liye hota hai packge -cookie-parser
const authRoutes=require('./routes/auth.routes');
const foodRoutes=require('./routes/food.router');
const foodpartnerRoutes=require('./routes/food-partner.routes');
const cors=require('cors'); //cors policy 


const app=express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

app.use(express.json()); //middleware 
app.use(express.urlencoded({ extended: true })); // optional, for form data
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('hello world');
})
 
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/foodpartner',foodpartnerRoutes);

module.exports=app;  
