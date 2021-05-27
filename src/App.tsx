import React from 'react';
import { Dimensions, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';

import TodoList from "./components/Todo/TodoList"
import useTodoState from "./hooks/useTodoState";
import { DEFAULT_ITEMS } from "./utils/mockdata/DEFAULT_ITEMS"
let screenHeight = Dimensions.get('window').height;


export default function App() {
  const TodoState = useTodoState(DEFAULT_ITEMS);

  return (
    <ScrollView_AppContainer>
      <View_ListContainer>
        <TodoList {...TodoState}/>
        </View_ListContainer>
    </ScrollView_AppContainer>
  );
}

// -- Styles -- //

const ScrollView_AppContainer = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  min-height: ${screenHeight}px;
`;

const View_ListContainer = styled.View`
  flex: 1;
  background-color: #F7F8FA;
  min-height: ${screenHeight}px;
  margin-top: ${StatusBar.currentHeight}px;
`;