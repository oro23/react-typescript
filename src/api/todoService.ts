// src/api/todoService.ts
import axios from 'axios';
import { Todo } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Replace with your API URL

// Create
export const createTodo = async (newTodo: Todo): Promise<Todo> => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
};

// Read
export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Update
export const updateTodo = async (id: number, updatedTodo: Todo): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
  return response.data;
};

// Delete
export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
