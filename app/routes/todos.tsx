import { Navigation } from "../components/Navigation";
import { useLoaderData, Form } from "react-router";
import type { Route } from "./+types/todos";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, title: "Learn React Router", completed: false },
  { id: 2, title: "Build a todo app", completed: true },
  { id: 3, title: "Master TypeScript", completed: false },
];

export const loader: Route.Loader = async () => {
  console.log('server side');
  return { todos: initialTodos };
};

export default function Todos() {
  const { todos: loadedTodos } = useLoaderData<Route.LoaderData>();
  const [todos, setTodos] = useState<Todo[]>(loadedTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;
    const newTodo: Todo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      title: newTodoTitle,
      completed: false
    };
    setTodos([newTodo, ...todos]);
    setNewTodoTitle("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Todo List</h1>
        <Form onSubmit={handleAdd} className="mb-6">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add new todo"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Todo</button>
        </Form>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  className="w-4 h-4 mr-4 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                />
                <span className={`text-gray-700 dark:text-gray-200 ${
                  todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                }`}>
                  {todo.title}
                </span>
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Error</h1>
        <p className="text-red-600 dark:text-red-400">{error.message}</p>
      </div>
    </div>
  );
}
