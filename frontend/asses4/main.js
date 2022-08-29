import React from "react";
import { useNavigate } from "react-router-dom";
const Main=()=>
{
    const navigate=useNavigate()
    const handleRegister=()=>
    {
        navigate('/register')
    }
    const handleuserlogin=()=>
    {
        navigate('/userlogin')
    }
    return(
        <div>
            <button onClick={handleRegister}>register</button>
            <button onClick={handleuserlogin}>Login</button>
        </div>
    )

}
export default Main