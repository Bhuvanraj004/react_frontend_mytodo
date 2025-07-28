const express = require('express');
const router = express.Router();
const Todo = require('../model/db');

// Get all todos
router.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post('/todos', async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

// Update a todo
router.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;