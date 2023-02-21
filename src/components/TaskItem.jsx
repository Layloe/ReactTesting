import React from "react";

function TaskItem(props) {
  const { task, completeTask, deleteTask } = props;
  const { id, taskName, isCompleted } = task;

  const handleClick = () => {
    completeTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`task-name ${isCompleted ? "text-muted" : ""}`}
        onClick={handleClick}
      >
        {taskName}
      </span>
      {isCompleted ? (
        <span className="badge badge-success badge-pill">Completed</span>
      ) : null}
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
