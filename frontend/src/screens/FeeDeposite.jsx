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
import axios from "axios"
import { useParams } from "react-router-dom"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const FeeDeposite = () => {
  const {id} =useParams()
  const form = useForm()



  const onSubmit = async(data) => {
    const Data = {...data,student_id:`${id}`}
    console.log("Form Submitted:", {...data,student_id:`${id}`})
    try {
      await axios.post("http://localhost:3000/fee",Data)
    } catch (error) {
      console.log(error);
    }
  }

  return (<div className="@container/main flex flex-1 flex-col gap-2">
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Student Fee Deposite Form</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Fee & Payment Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="fee_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Tuition, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Month</FormLabel>
                    <FormControl>
                      <Input type="month" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="total_amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="paid_amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Paid Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="due_amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receipt_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receipt Number</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="late_fee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Late Fee</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
  <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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
                                <FormLabel>Academic Year Name</FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Year" />
                                    </SelectTrigger>
                                     <SelectContent>
                                      <SelectItem value="2021-2022">2021-2022</SelectItem>
                                      <SelectItem value="2022-2023">2022-2023</SelectItem>
                                      <SelectItem value="2023-2024">2023-2024</SelectItem>
                                      <SelectItem value="2024-2025">2024-2025</SelectItem>
                                      <SelectItem value="2025-2026">2025-2026</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
              />
            <FormField
              control={form.control}
              name="payment_status"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value || false}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300"
                    />
                  </FormControl>
                  <FormLabel>Payment Status (Paid)</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input placeholder="Remarks" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="signature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Signature</FormLabel>
                  <FormControl>
                    <Input placeholder="Signature" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
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
