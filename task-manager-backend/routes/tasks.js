const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const sql = 'INSERT INTO task (title, description, is_completed) VALUES (?, ?, ?)';
  db.query(sql, [title, description, 'NO'], (err, result) => {
    if (err) {
      console.error('Error inserting task:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'Task added successfully', taskId: result.insertId });
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM task WHERE is_completed = "NO" ORDER BY created_at DESC LIMIT 5';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      return res.status(500).json({ message: 'Error fetching tasks' });
    }
    res.json(results);
  });
});


router.put('/:id/complete', (req, res) => {
  const taskId = req.params.id;
  const sql = 'UPDATE task SET is_completed = "YES" WHERE id = ?';
  db.query(sql, [taskId], (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      return res.status(500).json({ message: 'Error updating task' });
    }
    res.json({ message: 'Task marked as completed' });
  });
});

module.exports = router;
