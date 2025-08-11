import { Toaster } from '@/components/ui/sonner';
import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react'
import { toast } from 'sonner';

const createAuth = createContext();
export const useAuth = ()=>{
 return useContext(createAuth)
}

const AuthContext = ( {children}) => {
     
    const handleLogin = async(formdata,navigate)=>{

        try {
            const responce = await axios.post("http://localhost:3000/user/login",formdata)
            window.localStorage.setItem("Token",responce.data.jwt);
            toast("Event has been created.")
            console.log(responce.data);
            navigate("/admin")
           
             
        }  catch (error) {
            console.log(error.message)
        }
    }
    

    
    const value = {
        handleLogin
    }
  return (
   
   <createAuth.Provider value={value}>
    {children}
     <Toaster />
   </createAuth.Provider>
  )
}

export default AuthContext