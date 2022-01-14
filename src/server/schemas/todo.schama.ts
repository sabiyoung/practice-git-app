import mongoose from 'mongoose';
import type { Todo } from '../../shared/models/Todo.model';
const {Schema, model} = mongoose

const todoSchema = new Schema<Todo>({
text: {type: String, required:true}
});

export const TodoModel = model<Todo>('Todo', todoSchema)