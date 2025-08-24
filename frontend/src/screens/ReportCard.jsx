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

export const ReportCard = () => {
  const form = useForm({
    defaultValues: {
      stu_lvl_id: "",
      total_marks: "",
      max_marks: "",
      percentage: "",
      Grade: "",
      Division: "",
      attendance_id: "",        // could be multi-select
      teacher_remark: "",
      promoted_to_cls_id: "",
      sup_in: "",
      sch_reopen: "",           // date
    },
  });

  const [attendanceOptions, setAttendanceOptions] = useState([]);

  useEffect(() => {
    async function fetchAttendance() {
      try {
        const res = await axios.get("http://localhost:3000/attendance"); 
        // adjust according to actual API shape
        setAttendanceOptions(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAttendance();
  }, []);

  const onSubmit = async (data) => {
    const Token = localStorage.getItem("Token");
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      // Convert attendance_id array to JSON string or append multiple times
      formData.append(key, value);
    });

    try {
      await axios.post("http://localhost:3000/reportcard", formData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Student Year Level */}
            <FormField
              control={form.control}
              name="stu_lvl_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Year Level ID</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Mongo ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Marks and Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["total_marks", "max_marks", "percentage", "sup_in"].map((name) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{name.replace(/_/g, " ").toUpperCase()}</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder={`Enter ${name}`} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Grade, Division, Promotion */}
            <FormField
              control={form.control}
              name="Grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., A" {...field} />
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
                    <Input placeholder="e.g., First" {...field} />
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
                  <FormLabel>Promoted To Class ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Mongo ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Attendance ID(s) */}
            <FormField
              control={form.control}
              name="attendance_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attendance Record ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Mongo ID(s), comma-separated" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Teacher Remark */}
            <FormField
              control={form.control}
              name="teacher_remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teacher Remark</FormLabel>
                  <FormControl>
                    <Input placeholder="Remark here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* School Reopen Date */}
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

            {/* Submit Button */}
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
