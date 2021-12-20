import React from "react";
import Task from "./Task";

function TaskList({tasks, updateTaskList}) {

  function removeTask(event) {
    console.log(event.target.value);
    const deleteTask = tasks.filter((task) => task.id != event.target.value);
    updateTaskList([deleteTask])
  }

  
  
  // const tasksToDisplay = 


  return (
    <div className="tasks">
      {tasks.map((task)=> (
        <Task key={task.id} id={task.id} description={task.description} category={task.category} removeTask={removeTask} />))}
    </div>
  );
}

export default TaskList;
