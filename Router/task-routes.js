const express = require('express');
const router = express.Router();
const TaskController = require("../Controller/TaskController")

// Create Task Route
router.post('/', TaskController.create)

// Read All Task Route
router.get('/',TaskController.readAll)

// Read One Task Route
router.get('/:id',TaskController.readOne)

// Update Task Route
router.put('/:id', TaskController.update)

// Delete Task Route
router.delete('/:id', TaskController.delete)

module.exports = router;