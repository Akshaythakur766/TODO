import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "Todo/components/ui/dialog";
const UpdateTask = ({open , setOpen}:{open:boolean ,setOpen:Dispatch<SetStateAction<boolean>>}) => {
  return (
    <Dialog open={open}  onOpenChange={()=>setOpen(false)} >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTask;
