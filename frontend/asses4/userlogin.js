import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Userlogin=()=>
{
    const navigate=useNavigate()
    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/signin',{email:useremail,password:userpassword})
        .then((res)=>{
            console.log(res)
            localStorage.setItem('accesstoken',res.data.accesstoken)
            if(res.data.msg==="you are authenticated" && res.data.result==='user')
                navigate('/dashboard')
            if(res.data.msg==="you are authenticated" && res.data.result==='admin')
                navigate('/admindashboard')
            

        })
        .catch((e)=>console.log(e))
        // axios.get('http://localhost:3002').then((res)=>console.log(res)).catch((e)=>console.log)
        


    }
    return(
        <div>
            Email:<input type='text' onChange={(e)=>handleChange(e,'email')}></input>
            Password:<input type='text' onChange={(e)=>handleChange(e,'password')}></input>
            <button onClick={(e)=>handleLogin(e)}>login</button>

        </div>
    )
}
export default Userlogin