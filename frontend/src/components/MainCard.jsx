import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useAuth } from '@/auth/AuthContext'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const MainCard = () => {
    const {userData} = useAuth();
    const { user_pro } = userData.user;
 
    
    const bufferData = user_pro?.data?.data;
const base64String = btoa(
  new Uint8Array(bufferData)
    .reduce((data, byte) => data + String.fromCharCode(byte), '')
);
const imageSrc = `data:${user_pro.mimetype};base64,${base64String}`;
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs'>
        <Card className="@container/card md:flex md:flex-row">
      <CardHeader className='md:size-60'>
        <img  src={imageSrc} alt="Profile" />
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 ">
         <CardTitle className="font-extrabold text-2xl md:text-4xl">{userData.user.first_name}  {userData.user.last_name}</CardTitle>
         <h4 className="@[540px]/card:block">role:{userData.role}</h4>
        <CardDescription>
          <p className="@[540px]/card:block font-bold">
            Personal Infomation
          </p>
          <p className="@[540px]/card:block">
            email:{userData.user.email}
          </p>
          <p className="@[540px]/card:block">phone no: {userData.user.ph_no}</p>
        </CardDescription>
      </CardContent>
      {/* <CardFooter className="max-w-md">
          <p className="whitespace-normal break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe dolore eaque reiciendis ratione error eligendi, consequuntur est porro corrupti natus voluptatem eius dignissimos dicta quam ut fuga rerum vitae.</p>
        </CardFooter> */}
    
    
    </Card>
    </div>
  )
}

export default MainCard
