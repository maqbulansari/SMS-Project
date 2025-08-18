import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SideHeader } from '@/components/SideHeader'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export const FeeSubmitForStudent = () => {
  const [data, setdata] = useState([]);
  const Navigation = useNavigate();

  const gettingAllstudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/getstudent")
      console.log(response.data.students);
      setdata(response.data.students)
    } catch (error) {
      console.log(error);

    }
  }

const handleDailogBox = ()=>{

} 

  useEffect(() => {
    gettingAllstudents()
  }, [])
  return (
     <div className="@container/main flex flex-1 flex-col gap-2"> 
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
        <Button  onClick={()=> Navigation(`fee/deposite/${item.user_id}`)}>Deposite Fee</Button>
       <div>
        </div> 
 <Dialog>
      <DialogTrigger>Fee Record</DialogTrigger>
      
      <DialogContent
        className="w-fit max-w-none p-4"
        style={{ minWidth: 'unset', maxWidth: 'unset' }}
      >
        <DialogHeader>
          <DialogTitle>Fee Records</DialogTitle>
          <DialogDescription asChild>
            <div>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Receipt</TableHead>
                    <TableHead>Month</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Fee Type</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Due Amount</TableHead>
                    <TableHead>Late Fee</TableHead>
                    <TableHead>Remark</TableHead>
                    <TableHead>Sign</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>August</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Tuition</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>$0.00</TableCell>
                    <TableCell>$0.00</TableCell>
                    <TableCell>On Time</TableCell>
                    <TableCell>✔️</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </Card>
   )}
   )}
 
</div>

  </div></div>
  )
}
