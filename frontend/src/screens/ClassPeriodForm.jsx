import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "sonner"

export const ClassPeriodForm = () => {
  const form = useForm();


  const [tdata,settdata] = useState([]);
  const [sdata,setsdata] = useState([]);


const gettingteachers = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/admin/getteacher")
    console.log(response.data.teachers);
    settdata(response.data.teachers)
  } catch (error) {
    console.log(error);
    
  }
}
const gettingSub = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/sub")
    console.log(response.data.data);
    setsdata(response.data.data)
  } catch (error) {
    console.log(error);
    
  }
}
useEffect(()=>{
  gettingteachers();
  gettingSub();
},[])


  const onSubmit = async (data) => {
    console.log("formData", data);
    try {
       const response = await axios.post("http://localhost:3000/class",data)
       toast("Class Period Created")
    } catch (error) {
       console.log(error);
       toast("Can't Create Class Period")
    }

  }

  return (<div className="@container/main flex flex-1 flex-col gap-2">
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Class Period Form</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Class Period Details</h3>

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
              <FormField
                control={form.control}
                name="start_period_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Period Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="end_period_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Period Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                  <FormField
                control={form.control}
                name="clsroom_no"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Classroom</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>
          <div className="pt-6 text-center">
            <Button type="submit" className="w-full md:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div> </div>
  )
}
