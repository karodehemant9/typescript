"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    return res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    return res.status(201).json({ todo: newTodo, message: 'todo added', todos: todos });
});
router.put('/todo/:todoID', (req, res, next) => {
    const tid = req.params.todoID;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ todos: todos, message: 'todo updated' });
    }
    else {
        return res.status(404).json({ message: 'can\'t find todo' });
    }
});
router.delete('/todo/:todoID', (req, res, next) => {
    const tid = req.params.todoID;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos = todos.filter(todoItem => todoItem.id !== tid);
        return res.status(200).json({ todos: todos, message: 'todo deleted' });
    }
    else {
        return res.status(404).json({ message: 'can\'t find todo' });
    }
});
exports.default = router;
