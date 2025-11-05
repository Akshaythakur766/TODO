"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { Button } from "Todo/components/ui/button";
import { Calendar } from "Todo/components/ui/calendar";

interface Props {
  value?: Date | null;
  onChange: (v: Date | null) => void;
}

export function InlineDatePicker({ value, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const isValidDate = value instanceof Date && !isNaN(value.getTime());
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  // ✅ Close when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <Button
        variant="outline"
        onClick={() => setOpen((s) => !s)}
        className="w-full justify-start text-left"
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {isValidDate ? format(value!, "PPP") : "Pick a date"}
      </Button>

      {/* Render calendar ABOVE instead of below */}
      {open && (
        <div className="absolute left-0 bottom-full mb-2 z-40 w-auto p-0">
          <div className="rounded border bg-white shadow">
            <Calendar
              mode="single"
              selected={isValidDate ? value : undefined}
              
              onSelect={(d) => {
                onChange(d ?? null);
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
