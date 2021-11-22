import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosRepositoryService {
  constructor() {}

  public fetchTodos(): Observable<Todo[]> {
    return of(JSON.parse(localStorage.getItem('todos') || '[]'));
  }
}
