import { Injectable } from '@angular/core';
import { Todo } from '../../../../shared/models/Todo.model'
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private api: ApiService) { }
  createTodo(todo:Todo) {
    console.log("todo service")
  return this.api.post<{ data: Todo }>('create-todo', todo)
    .pipe(map((res) => res.data));

}

getTodos(){
  return this.api.get<{data: Todo[]}>('todos').pipe(map((res) => res.data))
}
deleteTask(todo:Todo){
  console.log("service", todo)
  return this.api.delete<{data:Todo}>("delete-task/" + todo._id)
}
}
