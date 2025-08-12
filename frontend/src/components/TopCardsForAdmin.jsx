import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
const TopCardsForAdmin = () => {
    const data = [
    {
  name:"Teacher",
  Total:20,
  },
    {
  name:"Student",
  Total:140,
  },
    {
  name:"officeStaff",
  Total:44,
  },
    {
  name:"Guardian",
  Total:44,
  }
]
  return (
   <div className='md:grid md:grid-cols-4 gap-4'> {data.map((item)=> (
    <Card className="size-72 md:w-[160px] h-fit m-4 lg:w-72">
  <CardHeader>
    <CardTitle>{item.name}</CardTitle>
    <CardDescription>all the info of the school</CardDescription>
  </CardHeader>
  <CardContent>
    <p className='text-3xl'>{item.Total}</p>
  </CardContent>
  <CardFooter>
    <p>view more...</p>
  </CardFooter>
</Card>

   )
   )}
  
</div>
)
}

export default TopCardsForAdmin