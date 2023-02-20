import React from 'react';

function TaskCounter(props) {
  const completedCount = props.taskList.filter((task) => task.isCompleted).length;
  const remainingCount = props.taskList.length - completedCount;

  return (
    <div className="text-center">
      <p>
        Completed: {completedCount} | Remaining: {remainingCount}
      </p>
    </div>
  );
}

export default TaskCounter;
