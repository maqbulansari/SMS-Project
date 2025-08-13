import React, { useEffect, useState } from 'react'
import { SideHeader } from '@/components/SideHeader'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'


const AllofficeStaff = () => {

  const [data, setdata] = useState([]);

  const gettingofficestaff = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/getofficestaff")
      console.log(response.data.officeStaff);
      setdata(response.data.officeStaff)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    gettingofficestaff()
  }, [])
  return ( 
    <div className="@container/main flex flex-1 flex-col gap-2">
      <SideHeader />
      <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4"> {data.map((item) => {
          const { user_pro } = item.user_info[0];
          const imageSrc = `data:${user_pro.mimetype};base64,${user_pro?.data}`;

          return (

            <Card className="@container/card">
              <CardHeader>
                <img src={imageSrc} alt="Profile" />
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {item.user_info[0]?.first_name} {item.user_info[0]?.last_name}
                </CardTitle>
                <p> {item.user_info[0]?.gender}</p>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <CardDescription>{item.user_info[0]?.email}</CardDescription>
                <div className="text-muted-foreground">
                  <p> phone: {item.user_info[0]?.ph_no}</p>
                </div>
              </CardFooter>
            </Card>

          )
        }
        )}

        </div>

      </div></div>
  )
}

export default AllofficeStaff
