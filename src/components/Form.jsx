import React, { useState } from "react";

function Form({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
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
          placeholder="Add your task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}

export default Form;
