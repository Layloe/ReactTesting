import React from "react";

function TaskStats(props) {
  const completedCount = props.tasks.filter((task) => task.isCompleted).length;
  const remainingCount = props.tasks.length - completedCount;

  return (
    <div className="text-center">
      <p>
        Completed: {completedCount} | Remaining: {remainingCount}
      </p>
    </div>
  );
}

export default TaskStats;
