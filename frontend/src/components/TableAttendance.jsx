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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const TableAttendance = () => {
  const [students, setStudents] = useState([]);
  const [getAttendance, setgetAttendance] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');


  console.log('students', students);


  useEffect(() => {
    gettingAllStudents();
    gettingAttendance();
  }, []);

  const filteredAttendance = selectedDate
    ? getAttendance.filter((d) => d.markedAt?.split("T")[0] === selectedDate)
    : getAttendance;


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
  const uniqueGrades = Array.from(
    new Set(students.map((s) => s.year_level_info[0]?.lvl_name).filter(Boolean))
  );

  const filteredStudents = selectedGrade
    ? students.filter((s) => s.year_level_info[0]?.lvl_name === selectedGrade)
    : students;


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = students.map((s) => ({
      student_id: s._id,
      status: attendance[s._id] ? true : false,
      markedAt: new Date()
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
        <div className='flex justify-between'>
        <div className="my-2">
          <Label htmlFor="grade-filter">Filter by Grade</Label>
          <Select
            id="grade-filter"
            value={selectedGrade || ''}
            onValueChange={(value) => setSelectedGrade(value)}
            className="w-[200px] border border-gray-300 rounded p-2"
          >
            <SelectTrigger>
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem >All Grades</SelectItem>
              {uniqueGrades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  {grade}
                </SelectItem>
              ))}

            </SelectContent>

          </Select>
        </div>
         <Dialog  >
          <DialogTrigger  >View Attendance</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Attendance Records</DialogTitle>
              <DialogDescription asChild>
                  <div>
                  <Label htmlFor="filter-date">Filter by Date</Label>
                  <Input
                    id="filter-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-[200px]"
                  /> </div>
              </DialogDescription>
              <div className="text-muted-foreground text-sm">
                <Table>
                  <TableCaption>A list of Attendance.</TableCaption>
                  <TableHeader>
                    <TableRow className="flex justify-between">
                      <TableHead className="w-[100px]">markedAt</TableHead>
                      <TableHead>StudentName</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAttendance.map((d) => {
                      const dateOnlyISO = d.markedAt?.split("T")[0];
                      return (
                        <TableRow key={d._id} className="flex justify-between">
                          <TableCell className="font-medium">{dateOnlyISO}</TableCell>
                          <TableCell>{d.user_info[0]?.first_name}</TableCell>
                          <TableCell>{d.year_level_info?.[0]?.lvl_name || '-'}</TableCell>
                          <TableCell className="text-right">
                            {d.status ? 'Present' : 'Absent'}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </DialogHeader>
          </DialogContent>

        </Dialog>
</div>
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
            {filteredStudents.map((s) => {
              const { user_info, school_year_info, year_level_info, _id } = s;
              return (
                <TableRow key={_id}>
                  <TableCell className="font-medium">
                    {user_info[0]?.first_name}
                  </TableCell>
                  <TableCell>{school_year_info[0]?.name}</TableCell>
                  <TableCell>{year_level_info[0]?.lvl_name}</TableCell>
                  {/* <TableCell>{dateOnlyISO}</TableCell> */}
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
        <Button type="submit" className="mr-2">Submit</Button>
      </form>
    </div>
  );
};
