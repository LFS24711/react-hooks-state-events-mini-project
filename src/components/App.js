import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  let [idGen, setID] = useState(0);
  const sTaskList = TASKS.map((a, i) => {
    return {  
      description: a.text,
      category: a.category,
      id: i,
    }
  });
  const [tasks, setTasks] = useState([...sTaskList]);
  const [categories, setCategories] = useState([...CATEGORIES])
  // setTasks(sTaskList);

  function updateTaskList (newTaskList){
    setTasks([...newTaskList])
  }



console.log(tasks)







  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}/>
      <NewTaskForm categories={categories} updateTaskList={updateTaskList}/>
      <TaskList tasks={tasks} updateTaskList={updateTaskList}/>
    </div>
  );
}

export default App;
