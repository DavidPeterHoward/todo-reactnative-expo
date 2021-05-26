import * as React from 'react';
import { Button, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { mount, shallow,  } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import renderer from 'react-test-renderer';

import useTodoState from "./useTodoState"
import { DEFAULT_ITEMS } from "../utils/mockdata/DEFAULT_ITEMS"

describe('useTodoState Custom Hook', () => {
  it('Add 1 todo item', () => {
    const { result } = renderHook(() => useTodoState(DEFAULT_ITEMS))
    act(() => result.current.addTodo("a new todo"))
    expect(result.current.todos.length).toEqual(4);
  })
  it('Add 2 todo items', () => {
    const { result } = renderHook(() => useTodoState(DEFAULT_ITEMS))
    act(() => result.current.addTodo("a new todo"))
    act(() => result.current.addTodo("a new todo 2"))
    expect(result.current.todos.length).toEqual(5);
  })
  it('toggle completed on todo item', () => {
    const { result } = renderHook(() => useTodoState(DEFAULT_ITEMS))
    act(() => result.current.toggleComplete(0))
    expect(result.current.todos[0].completed).toEqual(true);
  })
  it('edit text of todo item', () => {
    const { result } = renderHook(() => useTodoState(DEFAULT_ITEMS))
    act(() => result.current.editTodo(0, "new text for todo item"))
    expect(result.current.todos[0].text).toEqual("new text for todo item");
  })
  it('delete item', () => {
    const { result } = renderHook(() => useTodoState(DEFAULT_ITEMS))
    act(() => result.current.deleteTodo(0))
    expect(result.current.todos.length).toEqual(2);
  })
});