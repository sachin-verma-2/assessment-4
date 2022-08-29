import React from "react";
import BookDetails from "./data";
import { useNavigate } from "react-router-dom";

const AdminDashboard=()=>
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
                <button>edit</button>
                <button>delete</button>
            </div>
        ))
    }
</div>)
}
export default AdminDashboard