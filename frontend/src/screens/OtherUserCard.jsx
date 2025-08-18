import { useAuth } from '@/auth/AuthContext'
import { FeeSubmitForStudent } from '@/components/FeeSubmitForStudent'
import MainCard from '@/components/MainCard'
import { TableAttendance } from '@/components/TableAttendance'
import React from 'react'


export const OtherUserCard = () => {
const {userData} = useAuth()
const role = userData.role;
  return (

    <div className="mt-20 px-4 lg:px-6">
      <MainCard />
      {role === "Teacher" ? <TableAttendance/>:
      <FeeSubmitForStudent/>
      }
    </div>
  )
} 
