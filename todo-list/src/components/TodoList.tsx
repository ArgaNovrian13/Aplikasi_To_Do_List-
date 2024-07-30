import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <ul className="space-y-4 font-Quicksand dark:text-gray-100 dark:bg-gray-900 ">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
