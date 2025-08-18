import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SideHeader } from '@/components/SideHeader'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const AllStudents = () => {
  const [data, setdata] = useState([]);

  const gettingAllstudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/getstudent")
      console.log(response.data.students);
      setdata(response.data.students)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    gettingAllstudents()
  }, [])
  return (
     <div className="@container/main flex flex-1 flex-col gap-2"> 
<SideHeader/>
  <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
 <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4"> {data.map((item)=>{  
  const { user_pro } = item.user_info[0];
const imageSrc = `data:${user_pro.mimetype};base64,${user_pro?.data}`;
  return(
  
    <Card className="@container/card">
        <CardHeader>
          <img  src={imageSrc} alt="Profile" />
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {item.user_info[0]?.first_name} {item.user_info[0]?.last_name}
          </CardTitle>
          <p> {item.user_info[0]?.gender}</p>
          <CardDescription>Father name:{item.father_name}</CardDescription>
          <CardDescription>Mother name:{item.mother_name}</CardDescription>
          <CardDescription>Grade:{item.year_level_info[0]?.lvl_name}</CardDescription>
          <CardDescription>DOB:{item.date_of_birth}</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            <p>  {item.user_info[0]?.email}</p>
            <p> phone: {item.user_info[0]?.ph_no}</p>
          </div>
           <div className="line-clamp-1 flex gap-2 font-medium">
            {item.qualification}
          </div>
        </CardFooter>
      </Card>

   )}
   )}
  
</div>

  </div></div>
  )
}

export default AllStudents
