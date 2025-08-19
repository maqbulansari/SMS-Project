import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const TableAttendance = () => {
  const [students, setStudents] = useState([]);
  const [getAttendance, setgetAttendance] = useState([]);
  const [attendance, setAttendance] = useState({}); 

  useEffect(() => {
    gettingAllStudents();
    gettingAttendance();
  }, []);

  const gettingAllStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/getstudent');
      setStudents(response.data.students);
    } catch (error) {
      console.error(error);
    }
  };
  const gettingAttendance = async () => {
    try {
      const response = await axios.get('http://localhost:3000/attendance');
      setgetAttendance(response.data.getting);
      console.log(response.data.getting);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheck = (studentId, isChecked) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: isChecked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = students.map((s) => ({
      student_id: s._id,
      status: attendance[s._id] ? true : false,
    }));

    try {
      const res = await axios.post('http://localhost:3000/attendance', payload);
      toast('Attendance submitted successfully!');
    } catch (err) {
      console.error('Submission failed:', err);
      toast('Failed to submit attendance.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Table>
          <TableCaption>All students attendance list</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Student Name</TableHead>
              <TableHead>Year Lvl</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => {
              const { user_info, school_year_info, year_level_info, _id } = s;
              return (
                <TableRow key={_id}>
                  <TableCell className="font-medium">
                    {user_info[0]?.first_name}
                  </TableCell>
                  <TableCell>{school_year_info[0]?.name}</TableCell>
                  <TableCell>{year_level_info[0]?.lvl_name}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2">
                      <Label>
                        {attendance[_id] ? 'Present' : 'Absent'}
                      </Label>
                      <Input
                        className="size-3.5 mt-1"
                        type="checkbox"
                        checked={attendance[_id]}
                        onChange={(e) => handleCheck(_id, e.target.checked)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button type="submit">Submit</Button>
         <Dialog >
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
                    <TableHead className="text-right">Sign</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                 {getAttendance.map((d)=>(
                     <TableRow>
                    <TableCell className="font-medium">{d.receipt_number}</TableCell>
                    <TableCell>{d.month}</TableCell>
                    <TableCell>{d.payment_status}</TableCell>
                    <TableCell>{d.fee_type}</TableCell>
                    <TableCell>{d.total_amount}</TableCell>
                    <TableCell>{d.due_amount}</TableCell>
                    <TableCell>{d.late_fee}</TableCell>
                    <TableCell>{d.remarks}</TableCell>
                    <TableCell className="text-right">{d.signature}</TableCell>
                  </TableRow>


                 ))
                   }
                </TableBody>
              </Table>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </form>
    </div>
  );
};
