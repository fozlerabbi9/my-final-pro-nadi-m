import React, { useEffect, useState } from 'react';


const UserToken = (user) => {
    const[token,setToken] = useState("")
    useEffect(()=>{
        const email = user?.user?.email
        const currentUser = {email:email}
        
        if(email){
            fetch(`https://cryptic-waters-16109.herokuapp.com/user/${email}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(users=>{
                localStorage.setItem("AccessToken", users.token)
                setToken(users)
                console.log(users);
            })
        }
        
    },[user])
    return [token]
};

export default UserToken;