import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Fetchdata = () => {

    const [user , setUser] = useState([]);
    const navigate = useNavigate();

  useEffect(() =>{
    const Fetchdata = async()=> {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(response.data)
    }
    Fetchdata()
  }, [])
  console.log("Userdata :" ,user);
  
  return (
    <div >
       {user.map((users) => (

       <div key={users.id}>

     

     <h3  onClick={()=> navigate(`/Contact/${users.id}/${users.phone}`)}>
        {users.id} .
{users.name}
        </h3> <h3 >
            Phone :
{users.phone}
        </h3>
        <h3> Username :
            {users.username}
        </h3>
       </div>

       ))}
       
       

    

    </div>
  )
}

export default Fetchdata