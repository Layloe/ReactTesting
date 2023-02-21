import React, { useState } from "react";

function InputForm(props) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add Task"
          className="form-control"
          value={task}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
}

export default InputForm;
