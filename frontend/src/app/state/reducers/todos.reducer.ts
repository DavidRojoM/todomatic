import { createReducer, on } from '@ngrx/store';

import { addTodo, retrievedTodoList } from '../actions/todos.actions';
import { Todo } from '../../models/todo.interface';

export const initialState: ReadonlyArray<Todo> = [];

export const todosReducer = createReducer(
  initialState,
  on(retrievedTodoList, (state, { todos }) => [...state, ...todos]),
  on(addTodo, (state, { todo }) => [...state, ...[todo]])
);
