import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
 
  const [tasks, setTasks] = useState([...TASKS]);
  const [selectedCategory, setSelectedCategory] = useState("");
  

  function updateTaskList (newTaskList){
    setTasks([...newTaskList])
  }

  function onTaskFormSubmit(newTask){

    setTasks([...tasks, newTask])
  };

  function updateCat(newCat) {
    setSelectedCategory(newCat);
    console.log("Selected category: " + selectedCategory);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All" || selectedCategory === "")
      return true;
    return task.category === selectedCategory;
  });


console.log(tasks);



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateCat = {updateCat} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} updateTaskList={updateTaskList} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} updateTaskList={updateTaskList} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
