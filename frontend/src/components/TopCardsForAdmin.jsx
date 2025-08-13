import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/auth/AuthContext';
import { Button } from './ui/button';
import { Navigate, useNavigate } from 'react-router-dom';
const TopCardsForAdmin = () => {
  const {userData} = useAuth();
  const {totalcount} = userData;
  const navigation = useNavigate("")
    const data = [
    {
  name:"Teacher",
  Total:totalcount.teachers,
  des:"All school teachers",
  nav: "/allteachers"
  },
    {
  name:"Student",
  Total:totalcount.students,
  des:"All school students",
  nav: "/allstudents"
  },
    {
  name:"officeStaff",
  Total:totalcount.officeStaff,
  des:"All school officeStaff",
  nav: "/allofficestaff"
  },
    {
  name:"Guardian",
  Total:totalcount.guardians,
  des:"All school guardians"
  }
]
  return (
   <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4"> {data.map((item)=> (
    <Card className="@container/card">
        <CardHeader>
          <CardDescription>{item.name}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {item.Total}
          </CardTitle>
          {/* <CardAction>
            <Badge variant="outline">
              +12.5%
            </Badge>
          </CardAction> */}
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {item.des}
          </div>
          <div className="text-muted-foreground">
            <span> Check all about them </span>
          <Button onClick={()=>navigation(item.nav)} className="px-0 " variant="link">view more...</Button>
          </div>
        </CardFooter>
      </Card>

   )
   )}
  
</div>
)
}

export default TopCardsForAdmin