import React from 'react';
import { Dimensions, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import useTodoState from "./hooks/useTodoState";
  


const DEFAULT_ITEMS = [
  {id: 1, text: "Dinner with Jess", completed: false, category: "personal"},
  {id: 2, text: "Pay Rent", completed: true, category: "personal"},
  {id: 3, text: "Learn monads", completed: false, category: "work"},
]

let screenHeight = Dimensions.get('window').height;

export default function App() {
  const TodoState = useTodoState(DEFAULT_ITEMS);

  return (
    <ScrollView_AppContainer>
      <View_ListContainer><Text>Emulator Working Correctly</Text></View_ListContainer>
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
  background-color: #F9FAFF;
  margin-top: ${StatusBar.currentHeight}px;
`;