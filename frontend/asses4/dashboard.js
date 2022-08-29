import React from "react";
import BookDetails from "./data";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>
{
    const navigate=useNavigate()
    const deletetoken=()=>
    {
        localStorage.removeItem('accesstoken')
        navigate('/')
    }
return(<div>
     <button onClick={deletetoken}>logout</button>
    {
       
        BookDetails.map((item)=>(
            <div>
                <h5>{item.name}</h5>
                <p>{item.author}</p>
                <h5>{item.price}</h5>
            </div>
        ))
    }
</div>)
}
export default Dashboard