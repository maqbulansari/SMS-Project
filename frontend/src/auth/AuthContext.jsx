import { Toaster } from '@/components/ui/sonner';
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner';

const createAuth = createContext();
export const useAuth = () => {
  return useContext(createAuth)
}

const AuthContext = ({ children }) => {
  const [userData, setuser] = useState({});
  const {role} = userData;

  const handleLogin = async (formdata, navigate) => {

    try {
      const responce = await axios.post("http://localhost:3000/user/login", formdata)
      window.localStorage.setItem("Token", responce.data.jwt);
      toast("Login Successfully")
      console.log(responce.data);
      setuser(responce.data)

      
      if (role == "Director") 
            { return navigate("/admin") }
      if(role == "Teacher" ||role == "student" ||role == "Guardian" ||role == "OfficeStaff") {
      return  navigate("/user")
      }


    } catch (error) {
      console.log(error.message)
    }
  }



  const value = {
    handleLogin,
    userData
  }
  return (

    <createAuth.Provider value={value}>
      {children}
      <Toaster position="top-center" />
    </createAuth.Provider>
  )
}

export default AuthContext