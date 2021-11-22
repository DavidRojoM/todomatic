import { Todo } from '../models/todo.interface';
import { ActionReducerMap } from '@ngrx/store';
import { todosReducer } from './reducers/todos.reducer';

export interface AppState {
  todos: ReadonlyArray<Todo>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  todos: todosReducer,
};
