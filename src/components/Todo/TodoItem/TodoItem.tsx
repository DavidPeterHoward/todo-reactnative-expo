
import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled, { css } from 'styled-components/native';
import { ITodo } from "../../../types/ITodo";


const TodoItem = ({id, text, completed, category, deleteTodo, editTodo, toggleComplete}: ITodo): JSX.Element => {
  return(
    <TouchableOpacity 
      style={{display: "flex", width: "100%", maxWidth: "90%", flexDirection: "column"}}
      onPress={(_e: NativeSyntheticEvent<NativeTouchEvent>) => toggleComplete(id)}
      activeOpacity={0.9}
      >
      <View_TodoItemContainer>
        <TickIcon category={category} completed={completed}>
            <StyledIcon name="check" size={15} color={"#FFF"} />
        </TickIcon>
        <TodoContent completed={completed}>{text}</TodoContent>
      </View_TodoItemContainer>
    </TouchableOpacity>
  )
}

export default TodoItem;


// -- Styles -- //

const View_TodoItemContainer = styled.View<any>`
  font-size: 14px;
  background-color: white;
  border-radius: 7px;
  /* border: 1px solid #efefef; */
  min-height: 60px;
  margin-bottom: 10px;
  width: 100%;
  min-width: 80%;
  display: flex;
  flex-direction: row;
  /* font-family: 'Roboto', sans-serif; */
  shadow-color: #000;
  shadow-offset: 4px 2px;
  shadow-opacity: 0.16;
  shadow-radius: 4px;
  elevation: 2;
`;

const StyledIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TickIcon = styled.View<any>`
  ${props => (props.category === "personal" && props.completed === true) && css`
    background-color: #236EDA;
  `}
  ${props => (props.category === "personal" && props.completed === false) && css`
    border: 2px solid #236EDA;
  `}

  ${props => (props.category === "work" && props.completed === true) && css`
    background-color: #D23BD8;
  `}

  ${props => (props.category === "work" && props.completed === false) && css`
    border: 2px solid #D23BD8;
  `}
  color: white;
  border-radius: 15px;
  width: 25px;
  height: 25px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

const TodoContent = styled.Text<any>`
  text-decoration: ${props => props.completed ? 'line-through' : '' };
  align-self: center;
`;