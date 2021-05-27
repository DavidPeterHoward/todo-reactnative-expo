import React, { useState, useEffect } from 'react';
import {Text, View, Button, TextInput, SafeAreaView, NativeSyntheticEvent, TextInputChangeEventData, NativeTouchEvent, TouchableOpacity, FlatList } from 'react-native';
import styled, { css } from 'styled-components/native'

import TodoItem from "./TodoItem/TodoItem"
import { ITodo } from "../../types/ITodo";

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