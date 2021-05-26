import React from 'react';
import { ITodo } from "../types/ITodo";

export default function useTodoState(initialValue: any) {
  const [todos, setTodos] = React.useState(initialValue);

  return {
    todos,
    addTodo: (todoText: string) => {
      setTodos([...todos, { id: todos.length + 1, text: todoText, completed: false}]);
    },
    deleteTodo: (todoIndex: number) => {
      setTodos([...todos.filter((i: ITodo) => i.id !== todoIndex)])
    },
    toggleComplete: (todoIndex: number) => {
      const updatedTodo = todos.map((todo: ITodo) => {
        if(todo.id == todoIndex) {
          return {...todo, completed: !todo.completed }
        }
        return todo;
      })
      setTodos(updatedTodo);
    },
    editTodo: (todoIndex: number, text: string) => {
      const updatedTodo = todos.map((todo: ITodo) => {
        if(todo.id == todoIndex) {
          return {...todo, text: text }
        }
        return todo;
      })
      setTodos(updatedTodo);
    }
  }
}