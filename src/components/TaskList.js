import React from "react";
import Task from "./Task";

function TaskList({tasks, updateTaskList}) {

  function removeTask(event) {
    console.log(event.target.value);
    const deleteTask = tasks.filter((task) => task.text != event.target.value);
    updateTaskList([...deleteTask])
  }

  return (
    <div className="tasks">
      {tasks.map((task)=> (
        <Task key={task.text} text={task.text} category={task.category} removeTask={removeTask} />))}
    </div>
  );
}

export default TaskList;
