import React, { useEffect, useState } from "react";
import AddTask from "./components/addTask/AddTask";
import TaskCard from "./components/taskCard/TaskCard";
import FilterCard from "./components/filterCards/FilterCard";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [filterTask, setFilterTask] = useState("");
  const [filterTasks, setFilterTasks] = useState([]);
  const [AllTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
  }, [AllTasks, filterTasks]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks != null) {
      setAllTasks(tasks);
    }
  }, []);
  // filter data

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setFilterTasks(tasks);
  }, []);

  function handleFilter() {
    console.log(filterTask);
    const filteredTasks = filterTasks?.filter((task) => (filterTask?.toLowerCase() == "done" ? task.status == "0" : filterTask?.toLowerCase() == "not" ? task.status == "1" : ""));
    if (filteredTasks.length <= 0) {
      toast.error("No tasks found.", {
        style: {
          borderRadius: "10px",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#E72929",
          background: "#333",
          color: "#fff",
          width: "fit-content",
          height: "3rem",
          padding: "1.5rem 2rem",
        },
      });
      console.log(filteredTasks);
    } else {
      console.log(filteredTasks);
      setAllTasks(filteredTasks);
    }
  }

  return (
    <div className="app--container">
      <Toaster position="top-center" reverseOrder={false} />
      <FilterCard handleFilter={handleFilter} setFilterTask={setFilterTask} />
      <AddTask />
      <div className="task--card--container">
        {AllTasks?.map((data, index) => (
          <TaskCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
