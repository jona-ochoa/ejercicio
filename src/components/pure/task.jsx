import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete }) => {
  useEffect(() => {
    console.log("Tarea Creada");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi bi-toggle-on task-action"
          style={{ color: "green", fontSize: "25px" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi bi-toggle-off task-action"
          style={{ color: "tomato", fontSize: "25px" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="">{task.desc}</span>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i
          className="bi bi-trash task-action"
          style={{ color: "grey", fontSize: "25px" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
};

export default TaskComponent;
