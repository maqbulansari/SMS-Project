import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import axios from 'axios';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const TableAttendance = () => {
    const [students, setstudents] = useState([]);
    const [check, setcheck] = useState(false);


    const handleCheck = (status) => {
        setcheck(!status)
        console.log(check);

    }

    const gettingAllstudents = async () => {
        try {
            const response = await axios.get("http://localhost:3000/admin/getstudent")
            console.log(response.data.students);
            setstudents(response.data.students)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        gettingAllstudents()
    }, []);

    const handleSubmit = (e)=>{
      const payload = [
        
      ]
    }
    return (
        <div>
            <form onSubmit={handleSubmit()}>
            <Table>
            <TableCaption> All students attendance list</TableCaption>
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
                    const { user_info } = s;
                    const { school_year_info } = s;
                    const { year_level_info } = s;
                    return (

                        <TableRow>
                            <TableCell className="font-medium">
                                {user_info[0]?.first_name}</TableCell>
                            <TableCell>{school_year_info[0]?.name}</TableCell>
                            <TableCell>{year_level_info[0]?.lvl_name}</TableCell>
                            <TableCell className="text-right">
                                <div className='flex justify-end'>
                                    <Label >{check === true ? "Precent" : "Absent"}</Label><Input className="size-3.5 mt-1 " type="checkbox" onClick={(e) => handleCheck(e.target.checked)} value={check} />
                                </div></TableCell>
                        </TableRow>

                    )
                })}
            </TableBody>
            
        </Table><Button type="submit">submit</Button></form></div>
    )
}
