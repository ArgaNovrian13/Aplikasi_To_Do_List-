import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (task: string, timestamp: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      const timestamp = new Date().toLocaleString();
      addTodo(task, timestamp);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 p-2 font-Quicksand font-[500] border border-gray-300 dark:border-gray-700 dark:text-gray-900  rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-100"
        spellCheck="false"
        autoComplete="off"
      />
      <button
        type="submit"
        className="font-Fira bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
