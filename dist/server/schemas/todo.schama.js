import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const todoSchema = new Schema({
    text: { type: String, required: true }
});
export const TodoModel = model('Todo', todoSchema);
//# sourceMappingURL=todo.schama.js.map