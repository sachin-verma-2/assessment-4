import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register=()=>
{
    const navigate=useNavigate()
    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
    const [name,setname]=useState('')
    const [role,setrole]=useState('')
    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
        if(key==='name')
            setname(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/register',{name:name,email:useremail,password:userpassword,role:role}).then((res)=>console.log(res)).catch((e)=>console.log(e))
        navigate('/')
    }
    const handleRole=(e,key)=>
    {
        e.preventDefault();
        if(key==='admin')
            setrole('admin')
        if(key==='user')
            setrole('user')
    }
    return(
        <div>
            <form>
                name:<input type="text" onChange={(e)=>handleChange(e,'name')}></input>
                email:<input type="text" onChange={(e)=>handleChange(e,'email')}></input>
                password:<input type="text" onChange={(e)=>handleChange(e,'password')}></input>
                Role:<input type="text" onChange={(e)=>handleRole(e,'admin')}></input>
                <button onClick={(e)=>handleLogin(e)}>login</button>
            </form>
        </div>
    )
}
export default Register