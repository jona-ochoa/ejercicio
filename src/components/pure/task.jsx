import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>NOMBRE : { task.name }</h2>
      <h3>DESCRIPCION : { task.desc }</h3>
      <h4>LEVEL : { task.level }</h4>
      <h5>
        This Task is : { task.completed ? 'COMPLETED' : 'PENDING' }
      </h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
