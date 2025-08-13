
import MainCard from '@/components/MainCard'
import { SideHeader } from '@/components/SideHeader'
import TopCardsForAdmin from '@/components/TopCardsForAdmin'
import React from 'react'

const AdminDashboard = () => {

return(
 <div className="@container/main flex flex-1 flex-col gap-2"> 
<SideHeader/>
  <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
  
  <TopCardsForAdmin/>
  <div className="px-4 lg:px-6">
  <MainCard/></div>
  </div></div>
)
      
}

export default AdminDashboard