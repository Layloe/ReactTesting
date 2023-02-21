import React, { useState } from "react";
import TaskStats from "./components/TaskStats";
import InputForm from "./components/InputForm";
import TaskItem from "./components/TaskItem";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskName) => {
    if (taskName !== "") {
      const newTask = {
        id: Math.random(),
        taskName: taskName,
        isCompleted: false,
      };
      setTaskList([...taskList, newTask]);
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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="mb-0">To-Do List</h1>
            </div>
            <div className="card-body">
              <InputForm addTask={addTask} />
              <hr />
              <ul className="list-group">
                {taskList.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                  />
                ))}
              </ul>
              <hr />
              <TaskStats tasks={taskList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
