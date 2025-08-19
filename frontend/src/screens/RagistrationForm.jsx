import React, { useState } from "react"
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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { SideHeader } from "@/components/SideHeader"
import axios from "axios"
import { toast } from "sonner"

const RegistrationForm = () => {
  const form = useForm()
  const role = form.watch("role")
  const [filePreview, setFilePreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    console.log(file);
    
    if (file) {
      form.setValue("file", file)
      const reader = new FileReader()
      reader.onloadend = () => setFilePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }
    const onSubmit = async(data) => {
    console.log("Form Submitted:", data);
      try {
      await axios.post("http://localhost:3000/admin/register",data,{ headers: {
        "Content-Type": "multipart/form-data",
      },});
       toast("Registration Successfully")
    } catch (error) {
      console.log(error);
      toast("Registration Failed")
    }
  }

  return ( <div className="@container/main flex flex-1 flex-col gap-2"> 
  <SideHeader/>
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registration Form</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middle_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Middle Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ph_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="psw"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Profile Picture</FormLabel>
            <FormControl>
              <Input type="file" multiple={false} onChange={handleFileChange} />
            </FormControl>
            {filePreview && (
              <img
                src={filePreview}
                alt="Preview"
                className="w-24 h-24 rounded-md mt-2 object-cover border"
              />
            )}
          </FormItem>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teacher">Teacher</SelectItem>
                      <SelectItem value="OfficeStaff">Office Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {role === "Teacher" && (
            <div className="border-t pt-5 space-y-4">
              <h3 className="text-lg font-medium">Teacher Info</h3>

              <FormField
                control={form.control}
                name="adh_no"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aadhar Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Aadhar Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pen_no"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PEN Number</FormLabel>
                    <FormControl>
                      <Input type="Number" placeholder="PEN Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualification</FormLabel>
                    <FormControl>
                      <Input placeholder="Qualification" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {role === "OfficeStaff" && (
            <div className="border-t pt-5 space-y-4">
              <h3 className="text-lg font-medium">Office Staff Info</h3>

              <FormField
                control={form.control}
                name="date_join"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Joining</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
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

export default RegistrationForm
