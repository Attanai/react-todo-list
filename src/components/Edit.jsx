import React, { useState } from "react";

function Edit({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(value, task.id);
      setValue("");
    }
  };
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          className="todo-input"
          value={value}
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </>
  );
}

export default Edit;
