import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  constructor() {}

  ngOnInit(): void {}

  deleteTodo() {
    console.log('Deleted', this.todo.id);
  }

  completeTodo() {
    console.log('Completed', this.todo.id);
  }
}
