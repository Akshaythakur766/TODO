"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { Button } from "Todo/components/ui/button";
import { Calendar } from "Todo/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Todo/components/ui/popover";

interface DatePickerProps {
  value?: string | Date;
  onChange: (val: Date | undefined) => void; // normalized type
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  // Convert to Date if possible
  const parsedDate = value ? new Date(value) : undefined;
  const isValidDate =
    parsedDate instanceof Date && !isNaN(parsedDate.getTime());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!isValidDate}
          className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {isValidDate ? format(parsedDate!, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={isValidDate ? parsedDate : undefined}
          onSelect={(event) => {
            onChange(event);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
