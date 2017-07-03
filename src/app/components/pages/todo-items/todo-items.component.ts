import { TodoItem } from './../todo-item';
import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {


  @Input('items') items: TodoItem[];

  @Output() addTodoItem = new EventEmitter();

  @Output() delTodoItem = new EventEmitter();

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor() {}

  ngOnInit() {
  }

  getDate()
  {
    return (new Date());
  }

  addTodo($event: MouseEvent) {

      console.log('輸入的文字為 : ' + this.todoText);
      this.addTodoItem.emit(this.todoText);
    }

  chkItem(item: TodoItem) {
       item.done = !item.done;
   }

  delItem(item: TodoItem) {
       this.delTodoItem.emit(item);
   }

 }
