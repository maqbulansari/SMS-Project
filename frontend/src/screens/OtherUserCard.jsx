import { useAuth } from '@/auth/AuthContext'
import { FeeSubmitForStudent } from '@/components/FeeSubmitForStudent'
import MainCard from '@/components/MainCard'
import { SideHeader } from '@/components/SideHeader'
import StuCard from '@/components/StuCard'
import { TableAttendance } from '@/components/TableAttendance'
import React from 'react'


export const OtherUserCard = () => {
const {userData} = useAuth()
const role = userData.role;
  return (
     <div className="@container/main flex flex-1 flex-col gap-2"> 
      <SideHeader/>
    <div className="mt-10 px-4 lg:px-6">
     
      <MainCard />
      {role === "Teacher" && <TableAttendance/>}
      {role === "OfficeStaff" && <FeeSubmitForStudent/>}
      <StuCard/>
    </div> </div>
  )
} 
