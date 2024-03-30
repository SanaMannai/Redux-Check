import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    status: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    location.reload();
    if (!task.title || !task.status) {
      toast.error("Please fill in all fields");
      return;
    }

    const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    updatedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTask({ title: "", status: "" });

    toast.success("A new task has been added", {
      style: {
        borderRadius: "10px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#90D26D",
        background: "#333",
        color: "#fff",
        width: "fit-content",
        height: "3rem",
        padding: "1.5rem 2rem",
      },
    });
  };

  return (
    <div className="create--task">
      <div className="input--group">
        <label htmlFor="title">Task Name</label>
        <input type="text" name="title" id="title" value={task.title} onChange={handleForm} />
      </div>
      <div className="input--group">
        <label htmlFor="status">Task Status</label>
        <select name="status" id="status" value={task.status} onChange={handleForm}>
          <option value="" disabled>
            Select Status
          </option>
          <option value="0">Done</option>
          <option value="1">Not Done</option>
        </select>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
