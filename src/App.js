import React, { useState } from 'react';

function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const newTask = {
        id: Math.random(),
        taskName: task,
        isCompleted: false,
      };
      setTaskList([...taskList, newTask]);
      setTask("");
    }
  };

  const completeTask = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTasks);
  };

  const completedCount = taskList.filter((task) => task.isCompleted).length;
  const remainingCount = taskList.length - completedCount;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="mb-0">To-Do List</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Add Task"
                  className="form-control"
                  value={task}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={addTask}>
                Add
              </button>
              <hr />
              <ul className="list-group">
                {taskList.map((task) => (
                  <li
                    key={task.id}
                    className={`list-group-item ${
                      task.isCompleted ? "list-group-item-success" : ""
                    }`}
                    onClick={() => completeTask(task.id)}
                  >
                    {task.taskName}
                    <div className="float-right">
                      <button
                        className={`btn btn-sm mr-2 ${
                          task.isCompleted ? "btn-secondary" : "btn-success"
                        }`}
                        onClick={() => completeTask(task.id)}
                        disabled={task.isCompleted}
                      >
                        {task.isCompleted ? "Undo" : "Complete"}
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="text-center">
                <p>
                  Completed: {completedCount} | Remaining: {remainingCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
