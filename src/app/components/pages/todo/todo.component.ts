import { Component, OnInit } from '@angular/core';
import { TodoItemsComponent} from './../todo-items/todo-items.component';
import { TodoItem} from './../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todoItems: TodoItem[] =[{
    id: 1,
    value: 'bootstrap',
    done: false
  },{
    id: 2,
    value: 'route',
    done: true
  },{
    id: 3,
    value: 'basic todo function',
    done: true
  },{
    id: 4,
    value: 'database',
    done: false
  },{
    id: 5,
    value: 'git hub',
    done: true
  }
  ];


  constructor() {}

  ngOnInit() {
  }


  addTodo(text)
  {
      if(text !='')
      {
        this.todoItems.push({
          id: (new Date()).getTime(),
          value: text,
          done: false
          });
      }
      else
      {
          console.log('輸入為空白');
      }

  }

  delTodo(item : TodoItem)
  {
    console.log(item);
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
    console.log(this.todoItems);
  }
}
