const express=require('express')
const app=express()     
const userCredentials=require('./data/credentials')
const jwt=require('jsonwebtoken')
const cors=require('cors')
const authorize=require('./middlware/authorization')
const bp=require('body-parser')
app.use(cors())
app.use(bp.json())

app.post('/signin',(req,res)=>
{ 
    const data=req.body
    console.log(req)
    const result=userCredentials.find((item)=>item.email===data.email)
    console.log(result)
    if(data.password===result.password)
    {
        const token=jwt.sign({email:data.email},'jamesbond')
        console.log(token)
        res.send({"msg":"authenticated","status":true,"accesstoken":token})
    }
    else{
        res.send({"msg":"not authenticated","status":false})
    }

})
app.post('/signup',(req,res)=>{
    const data=req.body
    console.log(data)
    userCredentials.push(data)
    res.send({"msg":"sign up data received"})
})







app.listen(3003,()=>console.log('server started at 3001'))




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwiaWF0IjoxNjYxNDU1NDIyfQ.T5GD0Z2F63GKen66UVHCsHyC2Ak3oSzjKD3VAtIe4lo

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJ5QGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1NTUzOX0.FqOeJ4nNi7DWKYseq7jAsbpLOr8H1PFjWOMDv7Mqduo