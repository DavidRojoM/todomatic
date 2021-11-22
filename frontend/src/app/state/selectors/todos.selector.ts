import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../../models/todo.interface';

export const selectTodos = createFeatureSelector<ReadonlyArray<Todo>>('todos');
