import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  timestamp: string;
}

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing && newTask.trim()) {
      editTodo(todo.id, newTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md rounded-md my-2">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
      ) : (
        <div
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.task}
          <small className="block text-gray-500 text-sm">
            {todo.timestamp}
          </small>
        </div>
      )}
      <button
        className="ml-4 font-Fira bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
        onClick={handleEdit}
      >
        {isEditing ? (
          <>
            <i className="bi bi-save mr-2"></i>
            Save
          </>
        ) : (
          <>
            <i className="bi bi-pencil-square mr-2"></i>
            Edit
          </>
        )}
      </button>
      <button
        className="ml-4 font-Fira bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        <i className="bi bi-trash mr-2"></i>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
