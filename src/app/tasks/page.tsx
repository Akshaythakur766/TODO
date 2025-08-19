"use client";
import { useState } from "react";
import { Button } from "Todo/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "Todo/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "Todo/components/ui/tabs";
import { Badge } from "Todo/components/ui/badge";
import { Trash2 } from "lucide-react";
import { useTodos } from "Todo/hooks/useTodos";
import { AddTodo } from "Todo/components/tasks/AddTodo";
import { TodoItem } from "Todo/components/tasks/TodoItem";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";

const Tasks = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } =
    useTodos();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const [addTask, setAddTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(false);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen flex justify-center py-8">
      <div className="container  max-w-4xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">My Tasks</h1>
          <p className="text-muted-foreground">
            Organize your life, one task at a time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.total}
              </div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {stats.completed}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {stats.active}
              </div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
        </div>

        <AddTodo onAdd={addTodo} />
        <Button  onClick={()=>setAddTask(true)} >Add Task</Button>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Tasks</CardTitle>
              {stats.completed > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCompleted}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Completed
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Tabs
              value={filter}
              onValueChange={(value) => setFilter(value as any)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  All
                  <Badge variant="secondary" className="h-5 min-w-5 text-xs">
                    {stats.total}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="active" className="flex items-center gap-2">
                  Active
                  <Badge variant="secondary" className="h-5 min-w-5 text-xs">
                    {stats.active}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="flex items-center gap-2"
                >
                  Completed
                  <Badge variant="secondary" className="h-5 min-w-5 text-xs">
                    {stats.completed}
                  </Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value={filter} className="mt-4">
                <div className="space-y-3">
                  {filteredTodos.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      {filter === "all" && "No tasks yet. Add one above!"}
                      {filter === "active" && "No active tasks. Great job!"}
                      {filter === "completed" && "No completed tasks yet."}
                    </div>
                  ) : (
                    filteredTodos.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                      />
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <AddTask open={addTask} setOpen={setAddTask} />
      <UpdateTask open={updateTask} setOpen={setUpdateTask} />
    </div>
  );
};

export default Tasks;
