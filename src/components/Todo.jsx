import React from "react";
import { FaRegCheckCircle, FaEdit, FaRegTrashAlt } from "react-icons/fa";
function Todo({ task, toggleComplete, editTodo, deleteTodo }) {
  return (
    <>
      <div className="Todo">
        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div className="icon">
          <FaRegCheckCircle
            className="check-icon"
            onClick={() => toggleComplete(task.id)}
          />
          <FaEdit className="edit-icon" onClick={() => editTodo(task.id)} />
          <FaRegTrashAlt
            className="delete-icon"
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
