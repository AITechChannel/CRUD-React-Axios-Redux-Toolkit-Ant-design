import { PlusOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import FormAddTask from "./components/FormAddTask";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "../../Redux/sliceReducer/projectsSlice";
import { delTask, getActiveTasks } from "../../Redux/sliceReducer/tasksSlice";
import HeaderTask from "./components/HeaderTask";
import Task from "./components/Task";
import styles from "./ContentTask.module.scss";
const cx = classNames.bind(styles);

function ContentTask() {
  const [showFormAddTask, setShowFormAddTask] = useState(false);

  const dataTask = useSelector((state) => state.tasks);
  console.log("data store", dataTask);

  const handleCancel = (actionName) => {
    if (actionName === "cancel") {
      setShowFormAddTask(false);
    }
  };
  const dispatch = useDispatch();

  const handleDel = (actionName, id) => {
    console.log(actionName, id);

    if (actionName === "delete") {
      dispatch(delTask(id));
      dispatch(getActiveTasks());
    }
  };

  return (
    <>
      <HeaderTask />

      {dataTask.activeTasks.map((e, i) => (
        <Task
          id={e.id}
          key={`task_${i}`}
          taskName={e.content}
          description={e.description}
          onClick={handleDel}
        />
      ))}

      {!showFormAddTask && (
        <Button
          size="large"
          type="text"
          icon={<PlusOutlined />}
          onClick={() => setShowFormAddTask(!showFormAddTask)}
        >
          Add task
        </Button>
      )}

      {showFormAddTask && <FormAddTask onClick={handleCancel} />}
    </>
  );
}

export default ContentTask;
