const express=require('express')
const { default: mongoose } = require('mongoose')
const router=express.Router()
const contactModel=require('../models/CustomerModel')
const jwt=require('jsonwebtoken')
const app=express()

router.post('/register',(req,res)=>{
    const data=req.body
    const user1=new contactModel({
        name:data.name,
        email:data.email,
        password:data.password,
        role:data.role
    })
    user1.save().then((result)=>res.send({msg:'created contact'})).catch((e)=>console.log(e))
})
router.post('/userlogin',(req,res)=>{
    const data=req.body
    let tokens=''
    console.log(req)
    const token=jwt.sign({email:data.email},'jamesbond')
    contactModel.findOne({email:data.email,password:data.password,role:'user'})
    .then((res)=>{
        tokens+=token
        console.log(tokens)
    })
    res.send({"msg":"authenticated","accesstoken":token,"role":data})
})

router.post('/signin',async (req,res)=>{
    const data=req.body
    try{
        const result=await contactModel.findOne({email:data.email})
        console.log(result)
        if(result){
            if(result.password===data.password){
                const token=jwt.sign({email:data.email,role:result.role},'jamesbond')
                res.status(200).cookie('authorizer',token,{sameSite:'strict',httpOnly:true,maxAge:3600000})
                res.send({"msg":'you are authenticated',"status":true,"accesstoken":token,"result":result.role})
            }
            else{
                res.send({"msg":'check your password , not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})



module.exports=router

// .then((res)=>res.send({"msg":"authenticated","status":true,"accesstoken":token})).catch((e)=>console.log(e))


// const express=require('express')
// const router=express.Router()
// const contactModel=require('../models/CustomerModel')
// router.post('/create',(req,res)=>{
//     const data=req.body
//     console.log(req)
//     const user1=new contactModel({
//         Fname:data.Fname,
//         Phone:data.Phone,
//         Address:data.Address
//     })
//     user1.save().then((result)=>res.send({msg:'created contact'})).catch((e)=>console.log(e))
// })


// module.exports=router


