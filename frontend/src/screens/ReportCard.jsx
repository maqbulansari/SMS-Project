import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SideHeader } from "@/components/SideHeader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

export const ReportCard = () => {
  const {userData} = useAuth();

  const [ydata, setydata] = useState([]);
  const [sdata, setsdata] = useState([]);
  const [edata, setedata] = useState([]);
  const location = useLocation();
  const stuData = location.state;

  


  const form = useForm({
    defaultValues: {
      stu_lvl_id: "",
      total_marks: "",
      max_marks: "",
      marks_obtain: "",
      percentage: "",
      sub_id:"",
      exam_type_id:"",
      Grade: "",
      Division: "",
      attendance_id: "",
      teacher_remark: "",
      promoted_to_cls_id: "",
      sup_in: "",
      sch_reopen: "",
    },
  });
  const gettingYearlvl = async () => {
    try {
      const response = await axios.get("http://localhost:3000/yrlvl")
      console.log("yearlvl", response.data.data);
      setydata(response.data.data)
    } catch (error) {
      console.log(error);

    }
  }
  const gettingSub = async () => {
    try {
      const response = await axios.get("http://localhost:3000/sub")
      console.log("sub", response.data.data);
      setsdata(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const gettingExamTpye = async () => {
    try {
      const response = await axios.get("http://localhost:3000/examtype")
      console.log("exType", response.data);
      setedata(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gettingYearlvl();
    gettingSub();
    gettingExamTpye();
  }, [])
  const onSubmit = async (data) => {
    const Token = localStorage.getItem("Token");
    const attendanceIds = stuData.attendance_records?.map(record => record._id);
    const stuYearlvlId = stuData.student_year_info[0]?._id;
    const formData = { ...data,student_id:stuData._id, stu_lvl_id: stuYearlvlId, attendance_id: attendanceIds ,teacher_id:userData.teacher._id}
    try {
      await axios.post("http://localhost:3000/reportcard", formData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      console.log(formData);
      toast("Report Card Created Successfully");
      form.reset();
    } catch (error) {
      console.error(error);
      toast("Failed to create Report Card");
    }
  };

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <SideHeader />
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Report Card</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="total_marks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Marks</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter total marks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="max_marks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Marks</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter max marks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marks_obtain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Obtain Marks</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter obtain marks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="percentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter percentage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sup_in"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplement In</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Subject count" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="sub_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {sdata.map((s) =>
                          <SelectItem key={s._id} value={s._id}>{s.subject_name}</SelectItem>
                        )
                        }  </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="exam_type_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ExamType</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {edata.map((s) =>
                          <SelectItem key={s._id} value={s._id}>{s.Exam_Type_name}</SelectItem>
                        )
                        }  </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A++">A++</SelectItem>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B++">B++</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Division"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Division" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="First">First</SelectItem>
                        <SelectItem value="Secound">Secound</SelectItem>
                        <SelectItem value="Third">Third</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="promoted_to_cls_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year Level</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {ydata.map((y) =>
                          <SelectItem key={y._id} value={y._id}>{y.lvl_name}</SelectItem>
                        )
                        }  </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
   </div>

            <FormField
              control={form.control}
              name="teacher_remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teacher Remark</FormLabel>
                  <FormControl>
                    <Input placeholder="Write remark here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sch_reopen"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Reopen Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6 text-center">
              <Button type="submit" className="w-full md:w-auto">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
