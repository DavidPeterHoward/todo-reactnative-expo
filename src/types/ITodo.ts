export interface ITodo {
  todos?: [];
  id?: number;
  text?: string;
  category?: string;
  completed?: boolean;
  addTodo: Function;
  deleteTodo: Function;
  editTodo: Function;
  toggleComplete: Function;
}