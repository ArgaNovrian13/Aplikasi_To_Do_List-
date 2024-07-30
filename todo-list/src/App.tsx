import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  timestamp: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addTodo = (task: string, timestamp: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        task,
        completed: false,
        timestamp,
      },
    ]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newTask: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const notCompletedCount = todos.length - completedCount;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <body className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold font-Edu">To-Do List</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          >
            {darkMode ? (
              <i className="bi bi-brightness-high-fill text-yellow-400"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-blue-500"></i>
            )}
          </button>
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        <div className="mt-4 font-Barlow font-[500] flex justify-between">
          <p className="bg-blue-600  px-4 py-2 rounded dark:text-gray-100">
            Tasks Completed: {completedCount}
          </p>
          <p className="bg-red-600 px-4 py-2 rounded dark:text-gray-100">
            Tasks Not Completed: {notCompletedCount}
          </p>
          <p className="bg-gray-600 px-4 py-2 rounded dark:text-gray-100">
            Total Tasks: {todos.length}
          </p>
        </div>
      </div>
    </body>
  );
};

export default App;
