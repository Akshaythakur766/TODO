import { useState } from "react";
import { Card, CardContent } from "Todo/components/ui/card";
import { Button } from "Todo/components/ui/button";
import { Input } from "Todo/components/ui/input";
import { Badge } from "Todo/components/ui/badge";
import { Checkbox } from "Todo/components/ui/checkbox";
import { Edit2, Trash2, Check, X } from "lucide-react";
import { Todo } from "Todo/hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const priorityColors = {
  low: "bg-green-100 text-green-800 border-green-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-red-100 text-red-800 border-red-200",
};

export const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <Card
      className={`transition-all duration-200 ${
        todo.completed ? "opacity-75" : ""
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => onToggle(todo.id)}
            className="mt-1"
          />

          <div className="flex-1 min-w-0">
            {isEditing ? (
              <div className="flex gap-2">
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleEdit();
                    if (e.key === "Escape") handleCancel();
                  }}
                  className="flex-1"
                  autoFocus
                />
                <Button size="sm" onClick={handleEdit}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <p
                  className={`${
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {todo.text}
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={priorityColors[todo.priority]}
                  >
                    {todo.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {todo.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {!isEditing && (
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsEditing(true)}
                disabled={todo.completed}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onDelete(todo.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
