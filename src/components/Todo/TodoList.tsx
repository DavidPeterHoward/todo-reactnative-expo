import React from 'react';
import styled from 'styled-components/native';
import { ITodo } from "../../types/ITodo";
import TodoItem from "./TodoItem/TodoItem";


// Container Component for TodoItem (Presentational Component)
const TodoList = ({todos = [], ...props}: ITodo): JSX.Element => {
  return(
    <View_TodoListContainer>
      <Text_Tasks>Tasks</Text_Tasks>
      {todos.map((t: ITodo) => (
        <TodoItem key={t.id} id={t.id} text={t.text} completed={t.completed} category={t.category} {...props} />
      ))}
    </View_TodoListContainer>
  )
}

export default TodoList;

// -- Styles -- //

const Text_Tasks = styled.Text`
  max-width: 90%;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: #A1ACCD;
  font-weight: bold;
`;

const View_TodoListContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;