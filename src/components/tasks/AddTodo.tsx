import { useState } from "react";
import { Card, CardContent } from "Todo/components/ui/card";
import { Button } from "Todo/components/ui/button";
import { Input } from "Todo/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Todo/components/ui/select";
import { Plus } from "lucide-react";
import { Todo } from "Todo/hooks/useTodos";

interface AddTodoProps {
  onAdd: (text: string, priority: Todo["priority"]) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Todo["priority"]>("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), priority);
      setText("");
      setPriority("medium");
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1"
          />
          <Select
            value={priority}
            onValueChange={(value) => setPriority(value as Todo["priority"])}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" disabled={!text.trim()}>
            <Plus className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
