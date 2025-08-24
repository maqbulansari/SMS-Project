import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Exam = () => {

   const [tdata,settdata] = useState([]);
  const [sdata,setsdata] = useState([]);
  const [ydata,setydata] = useState([]);
  const [sydata,setsydata] = useState([]);
  const form = useForm({
    defaultValues: {
      term_number: "",
      Term_st_date: "",
      term_end_date: "",

      Exam_Type_name: "",

      exam_date: "",
      exam_st_time: "",
      exam_end_time: "",

      total_marks: "",
      paper_code: "",

      lvl_name: "", 
      name: "",     
      sub_id: "",
      teacher_id: "",

      exampaper: null,
    },
  });

  const handleFileChange = (e) => {
    const exampaper = e.target.files?.[0];
    if (exampaper) {
      form.setValue("exampaper", exampaper);
    }
  };



const gettingteachers = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/admin/getteacher")
    console.log("te",response.data.teachers);
    settdata(response.data.teachers)
  } catch (error) {
    console.log(error);
    
  }
}
const gettingSub = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/sub")
    console.log("sub",response.data.data);
    setsdata(response.data.data)
  } catch (error) {
    console.log(error);
    
  }
}
const gettingYearlvl = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/yrlvl")
    console.log("yearlvl",response.data.data);
    setydata(response.data.data)
  } catch (error) {
    console.log(error);
    
  } }
const gettingSchYearlvl = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/schyear")
    console.log("schyearlvl",response.data.data);
    setsydata(response.data.data)
  } catch (error) {
    console.log(error);
    
  }
} 
useEffect(()=>{
  gettingteachers();
  gettingSub();
  gettingYearlvl();
  gettingSchYearlvl();
},[])

  const onSubmit = async (data) => {
    const Token = localStorage.getItem("Token");
    console.log(data);
    

    try {
      await axios.post("http://localhost:3000/exam", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      toast("Exam Created Successfully");
      form.reset();
    } catch (error) {
      console.error(error);
      toast("Exam Creation Failed");
    }
  };

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <SideHeader />
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Exam Form</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            {/* Term Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b pb-2">Exam Term</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="term_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Term Number</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="1" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Term_st_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="term_end_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </section>

            {/* Exam Type Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b pb-2">Exam Type</h3>
              <FormField
                control={form.control}
                name="Exam_Type_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exam Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Midterm, Final" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>

            {/* Exam Schedule Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b pb-2">Exam Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="exam_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exam_st_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exam_end_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </section>

            {/* Paper Details Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b pb-2">Exam Paper Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="total_marks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Marks</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 100" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paper_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Paper Code</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="e.g., MATH101" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                control={form.control}
                 name="lvl_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Level</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                      {  ydata.map((y)=>
                          <SelectItem key={y._id} value={y.lvl_name}>{y.lvl_name}</SelectItem>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School Year</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                      {  sydata.map((s)=>
                          <SelectItem key={s._id} value={s.name}>{s.name}</SelectItem>
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
                      {  sdata.map((s)=>
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
                name="teacher_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teacher</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Teacher" />
                        </SelectTrigger>
                        <SelectContent>{
                          tdata.map((t)=>{const {user_info} = t;
                            return(
                                 <SelectItem value={t._id}>{user_info[0]?.first_name}</SelectItem>
                            )
                          })
                          }
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel>Upload Exam Paper</FormLabel>
                  <FormControl>
                    <Input type="file" multiple={false} accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} />
                  </FormControl>
                </FormItem>
              </div>
            </section>

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
