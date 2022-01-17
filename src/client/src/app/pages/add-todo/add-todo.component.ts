import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../../../../shared/models/Todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
title = ''
myArray=['']
// textArray: Todo[]=[]
todos:Todo[]=[];
public todos$!: Observable<Todo[]>;


  constructor(
    private todoService:TodoService,
    private fb: FormBuilder,) {

   }

  ngOnInit(): void {
    this.getTodos();

  }

  addToArray() {
    this.myArray.push(this.title)
    console.log("add to array", this.title)
  }
  addTodo() {
    this.todoService.createTodo({
  text: this.title
}).subscribe()
  }
getTodos() {
  // return  this.todoService.getTodos().pipe(map(data => {this.textArray = data}))
  this.todos$ = this.todoService.getTodos();

}

delete(todo:Todo){
  console.log("component", todo);
   this.todoService.deleteTask(todo).subscribe(data=>{
     console.log(data)
   })
}
}
