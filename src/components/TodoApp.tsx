// src/components/TodoApp.tsx
import React, { useEffect, useState } from "react";
import { Todo } from "../types";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../api/todoService";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Fetch all todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
      console.log('Todos')
    };
    fetchTodos();
  }, []);

  // Create a new Todo
  const handleCreateTodo = async () => {
    if (!newTodoTitle.trim()) return;
    const newTodo = { title: newTodoTitle, completed: false, id: 0 };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
    setNewTodoTitle("");
  };

  // Edit a Todo
  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
  };

  // Save an updated Todo
  const handleUpdateTodo = async () => {
    if (!editingTodo) return;
    const updatedTodo = { ...editingTodo };
    const updatedData = await updateTodo(updatedTodo.id, updatedTodo);
    setTodos(
      todos.map((todo) => (todo.id === updatedData.id ? updatedData : todo))
    );
    setEditingTodo(null);
  };

  // Delete a Todo
  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Add Todo */}
      <div>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleCreateTodo}>Add Todo</button>
      </div>

      {/* Edit Todo */}
      {editingTodo && (
        <div>
          <input
            type="text"
            value={editingTodo.title}
            onChange={(e) =>
              setEditingTodo({ ...editingTodo, title: e.target.value })
            }
          />
          <button onClick={handleUpdateTodo}>Save Changes</button>
        </div>
      )}

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
