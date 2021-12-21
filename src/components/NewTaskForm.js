import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const catSelect = categories.filter((cat) => cat !== "All");
  const [taskDescription, setDesc] = useState("");
  const [newCat, setCat] = useState("Code")

  function handleTextChange(event){
     setDesc(event.target.value);
     console.log(taskDescription);
  }

  function handleCatChange(event){
    setCat(event.target.value);
    console.log(newCat);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newTask ={
      text: taskDescription,
      category: newCat
    }

    onTaskFormSubmit(newTask);
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event)}  className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={taskDescription} onChange={(event) => handleTextChange(event)}  />
      </label>
      <label>
        Category
        <select onChange={(event)=>handleCatChange(event)} name="category">
          {catSelect.map((cat) => 
            <option key={cat} value={cat}> {cat}</option>) }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
