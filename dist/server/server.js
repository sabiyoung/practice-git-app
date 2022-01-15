import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { TodoModel } from './schemas/todo.schema.js';
const app = express();
const port = 3000;
const PORT = process.env.PORT || 3000;
mongoose
    .connect('mongodb://localhost:27017/practiceGitApp')
    .then(() => {
    console.log("Connected to DB Successfully");
});
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));
app.use(express.json());
app.post("/create-todo", function (req, res) {
    const{ text} = req.body;
    const todo = new TodoModel({
        text
    });
    todo
        .save()
        .then((data) => {
        res.json((data));
    })
        .catch((err) => {
        console.log(err);
        res.status(501);
        res.json({ errors: err });
    });
});
app.get("/todos", function (req, res) {
    TodoModel.find()
        .then((data) => res.json({ data }))
        .catch((err) => {
        res.status(501);
        res.json({ errors: err });
    });
});
app.listen(PORT, function () {
    console.log('server is running at', PORT);
});
//# sourceMappingURL=server.js.map