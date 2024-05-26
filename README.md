### 1. Create Task

Endpoint: `POST /tasks`

Description: This endpoint is used to create a new task.

//Request Body:


{
  "title": "Task Title",
  "description": "Task Description"
}


//Response:

json
{
  "Message": "Task creation successful",
  "task": {
    "id": "uniqueId",
    "title": "Task Title",
    "description": "Task Description"
  }
}
```

2. Read All Tasks

//Endpoint: `GET /tasks`

**Description:** This endpoint retrieves a list of all tasks.

//Response:


{
  "Message": "List of all tasks",
  "Tasks": [
    {
      "id": "uniqueId1",
      "title": "Task Title 1",
      "description": "Task Description 1"
    },
    {
      "id": "uniqueId2",
      "title": "Task Title 2",
      "description": "Task Description 2"
    }
    // ... other tasks
  ]
}

3. Read One Task

//Endpoint:`GET /tasks/:id`

Description: This endpoint retrieves details of a specific task by its ID.

//Response:


{
  "id": "uniqueId",
  "title": "Task Title",
  "description": "Task Description"
}


Error Response:


{
  "error": "Task not found"
}

4. Update Task

//Endpoint: `PUT /tasks/:id`

Description: This endpoint updates the details of a specific task by its ID.

//Request Body:


{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}


//Response:


{
  "id": "uniqueId",
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}


Error Response:


{
  "error": "Task not found"
}

 5. Delete Task

//Endpoint: `DELETE /tasks/:id`

Description: This endpoint deletes a specific task by its ID.

//Response:


{
  "Message": "Deleted Task",
  "ListTask": [
    // ... remaining tasks after deletion
  ]
}


//Error Response:


{
  "error": "Task not found"
}


//Usage Examples

### Example 1: Creating a Task

//Request:


POST /tasks
Content-Type: application/json

{
  "title": "Finish Assignment",
  "description": "Complete the math assignment by tomorrow."
}


//Response:


{
  "Message": "Task creation successful",
  "task": {
    "id": "abc123",
    "title": "Finish Assignment",
    "description": "Complete the math assignment by tomorrow."
  }
}


Example 2: Reading All Tasks

Request:


GET /tasks


Response:

```json
{
  "Message": "List of all tasks",
  "Tasks": [
    {
      "id": "abc123",
      "title": "Finish Assignment",
      "description": "Complete the math assignment by tomorrow."
    },
    {
      "id": "def456",
      "title": "Buy Groceries",
      "description": "Buy milk, eggs, and bread."
    }
    // ... other tasks
  ]
}


### Example 3: Reading a Specific Task

**Request:**

```http
GET /tasks/abc123
```

//Response:


{
  "id": "abc123",
  "title": "Finish Assignment",
  "description": "Complete the math assignment by tomorrow."
}


//Error Response:


{
  "error": "Task not found"
}


Example 4: Updating a Task

//Request:


PUT /tasks/abc123
Content-Type: application/json

{
  "title": "Complete Assignment",
  "description": "Finish the math assignment by tonight."
}


//Response:**


{
  "id": "abc123",
  "title": "Complete Assignment",
  "description": "Finish the math assignment by tonight."
}


//Error Response:


{
  "error": "Task not found"
}

Example 5: Deleting a Task

//Request:


DELETE /tasks/abc123
```

//Response:


{
  "Message": "Deleted Task",
  "ListTask": [
    // ... remaining tasks after deletion
  ]
}


//Error Response:

json
{
  "error": "Task not found"
}


 //Notes

- The `id` field in the responses represents a unique identifier for each task.
- Ensure that the request body for `POST` and `PUT` requests is in JSON format.
- The error responses will be returned with a 404 status code if the task is not found.