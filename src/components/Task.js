import React from "react";

function Task({description, category, id, removeTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{description}</div>
      <button value={id} onClick={(e)=>removeTask(e)} className="delete">X</button>
    </div>
  );
}

export default Task;
