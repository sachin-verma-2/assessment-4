const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://sachin:password%401Ab@cluster0.p9aywtf.mongodb.net/?retryWrites=true&w=majority")

const contactModel=mongoose.model("NeewCollection",{
    name:String,
    email:String,
    password:String,
    role:String
})

module.exports=contactModel


