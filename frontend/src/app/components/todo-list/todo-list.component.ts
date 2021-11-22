import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosRepositoryService } from '../../services/repository/todos-repository.service';
import { retrievedTodoList } from '../../state/actions/todos.actions';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.interface';
import { selectTodos } from '../../state/selectors/todos.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<readonly Todo[]> = new Observable();
  constructor(
    private readonly todosRepository: TodosRepositoryService,
    private store: Store
  ) {
    this.todoList$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todosRepository.fetchTodos().subscribe((todos) => {
      this.store.dispatch(retrievedTodoList({ todos }));
    });
  }
}
