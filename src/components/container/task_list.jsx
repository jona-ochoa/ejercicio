import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Tarea 1",
    "Descripción 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Tarea 2",
    "Descripción 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Tarea 3",
    "Descripción 3",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Tasks State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: cambiar el estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Tasks :</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task}></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <TaskForm />
        </div>
      </div>
      {/* TODO aplicar un for/map para renderizar una lista */}
    </div>
  );
};

export default TaskListComponent;
