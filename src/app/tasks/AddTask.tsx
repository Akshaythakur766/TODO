"use client";
import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "Todo/components/ui/dialog";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import { InlineDatePicker } from "Todo/components/custom/DatePicker";
import { Button } from "Todo/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "Todo/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Todo/components/ui/select";
import { getRandomValue } from "Todo/helper/getRandomValue";
import * as yup from "yup";
import { Checkbox } from "Todo/components/ui/checkbox";
import { Label } from "Todo/components/ui/label";

interface AddTaskType {
  id?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  notification?: boolean;
  taskPerformanceDate?: Date | null;
  priority: "low" | "medium" | "high";
}

const AddTask = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const defaultValues: AddTaskType = {
    id: getRandomValue(10),
    title: "",
    priority: "medium",
    notification: false,
    createdAt: new Date(),
    updatedAt: null,
    taskPerformanceDate: null,
  };

  const schema = yup.object().shape({
    id: yup.string().required("ID is required"),
    title: yup.string().required("Title is required"),
    createdAt: yup.date().required("CreatedAt is required"),
    updatedAt: yup.date().nullable(),
    notification: yup.boolean().optional(),
    taskPerformanceDate: yup.date().nullable(),
    priority: yup
      .mixed<"low" | "medium" | "high">()
      .oneOf(["low", "medium", "high"], "Priority must be low, medium, or high")
      .required("Priority is required"),
  });

  const form = useForm<AddTaskType>({
    defaultValues,
    mode: "onSubmit",
    resolver: yupResolver(schema) as Resolver<AddTaskType>,
  });

  const onSubmit = (data: AddTaskType) => {
    console.log("Task submitted:", data);
    // setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl w-full flex justify-center font-bold my-2">Add Task</DialogTitle>
          {/* <DialogDescription> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative z-[9999] border-3 border-secondary p-3 rounded-sm">
              <Controller
                name="id"
                control={form.control}
                render={({ field }) => <input type="hidden" {...field} />}
              />

              <Controller
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        placeholder="Enter task title"
                        className="border p-2 rounded w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                name="priority"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                name="notification"
                control={form.control}
                render={({ field }) => (
                  <div className=" border-2 rounded-sm p-[9px] border-secondary">

                    <FormItem>
                      <FormControl >
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={field?.value || false}
                            className="p-2"
                            onCheckedChange={field.onChange}
                          />
                          Enable Notification
                        </Label>
                      </FormControl>
                    </FormItem>
                  </div>
                )}
              />

              <Controller
                name="taskPerformanceDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Performance Date</FormLabel>
                    <FormControl>
                      <InlineDatePicker
                        value={field.value}
                        onChange={(date) => field.onChange(date)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <Button type="submit" variant="default">
                Submit
              </Button>
            </form>
          </Form>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
