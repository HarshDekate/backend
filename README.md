# Task API Documentation

## Overview

This documentation provides an overview of the Task API endpoints and their functionalities. The API allows you to create, read, update, and delete tasks. Each endpoint's request and response formats are detailed below.

## Endpoints

### Create Task

#### Endpoint

```http
POST /tasks
```

#### Description

Create a new task.

#### Request Body

```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

#### Response

```json
{
  "Message": "Task creation successful",
  "task": {
    "id": "uniqueId",
    "title": "Task Title",
    "description": "Task Description"
  }
}
```

### Read All Tasks

#### Endpoint

```http
GET /tasks
```

#### Description

Retrieve a list of all tasks.

#### Response

```json
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
```

### Read One Task

#### Endpoint

```http
GET /tasks/:id
```

#### Description

Retrieve details of a specific task.

#### Response

```json
{
  "id": "uniqueId",
  "title": "Task Title",
  "description": "Task Description"
}
```

#### Error Response

```json
{
  "error": "Task not found"
}
```

### Update Task

#### Endpoint

```http
PUT /tasks/:id
```

#### Description

Update details of a specific task.

#### Request Body

```json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
```

#### Response

```json
{
  "id": "uniqueId",
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
```

#### Error Response

```json
{
  "error": "Task not found"
}
```

### Delete Task

#### Endpoint

```http
DELETE /tasks/:id
```

#### Description

Delete a specific task.

#### Response

```json
{
  "Message": "Deleted Task",
  "ListTask": [
    // ... remaining tasks after deletion
  ]
}
```

#### Error Response

```json
{
  "error": "Task not found"
}
```

## How to Use the API

### Create a New Task

To create a new task, send a `POST` request to the `/tasks` endpoint with a JSON body containing the task's title and description.

### Retrieve All Tasks

To get a list of all tasks, send a `GET` request to the `/tasks` endpoint. The response will contain a list of all tasks.

### Retrieve a Specific Task

To get details of a specific task, send a `GET` request to the `/tasks/:id` endpoint, replacing `:id` with the unique ID of the task.

### Update a Task

To update a specific task, send a `PUT` request to the `/tasks/:id` endpoint with a JSON body containing the updated title and description.

### Delete a Task

To delete a specific task, send a `DELETE` request to the `/tasks/:id` endpoint. The response will confirm the deletion and provide the remaining tasks.

## Error Handling

If a task is not found, the API will respond with an error message:

```json
{
  "error": "Task not found"
}
```

Ensure you handle these error responses appropriately in your application to provide a smooth user experience.

## Contact Information

If you have any questions or need further assistance, please contact the support team.

---

**Note:** This documentation is for the Task API endpoints. Make sure to replace `:id` with the actual task ID when making requests.
