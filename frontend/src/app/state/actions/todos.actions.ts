import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.interface';

export const addTodo = createAction(
  '[TODO List] Add Todo',
  props<{ todo: Todo }>()
);

export const retrievedTodoList = createAction(
  '[Todo List/API] Retrieve Todos Success',
  props<{ todos: ReadonlyArray<Todo> }>()
);
