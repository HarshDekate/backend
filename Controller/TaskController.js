const tasks = require('../tasks');


// Create Task Controller
module.exports.create = (req, res,) => {
   const {title, description} = req.body;

   if(!title || !description) {
       return res.status(400).json({Message: 'Title and Description are required'});
   }

   const newTask = {id: Date.now().toString(), title, description};
   tasks.push(newTask);
   
   return res.status(201).json({Message: 'Task Create Sucessfull ', task: newTask})

}

// Read All Task Controller

module.exports.readAll = (req, res) => {
    console.log('Tasks:', tasks);
    return res.json({Message: 'List of All Task', Tasks: tasks});
}


// Read One Task Controller

module.exports.readOne = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);
  
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
}

// Update Task Controller

module.exports.update = (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], title, description };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
}

// Delete Task Controller

module.exports.delete = (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    tasks.splice(index, 1);
    return res.status(204).json({Message:'Deleted Task', ListTask: tasks});
  } else {
    return res.status(404).json({ error: 'Task not found' });
  }
}



