import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import FormAddTask from "./components/FormAddTask";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tasksSlice, {
  createTask,
  delTask,
  getActiveTasks,
} from "../../Redux/sliceReducer/tasksSlice";
import HeaderTask from "./components/HeaderTask";
import Task from "./components/Task";
import styles from "./ContentTask.module.scss";
const cx = classNames.bind(styles);

function ContentTask() {
  const dispatch = useDispatch();
  const [showFormAddTask, setShowFormAddTask] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const dataTasks = useSelector((state) => state.tasks);
  console.log("store", dataTasks);

  const handleOnClickFormAddTask = (actionName) => {
    if (actionName === "cancel") {
      setShowFormAddTask(false);
      setShowEdit(false);
      setTaskName("");
      setDescription("");
    }

    if (actionName === "addTask") {
      dispatch(
        tasksSlice.actions.add({
          content: taskName,
          description: description,
        })
      );
      dispatch(createTask({ content: taskName, description: description }));

      setShowFormAddTask(false);
      setTaskName("");
      setDescription("");
    }

    if (actionName === "save") {
      // end day 28/06/2022
    }
  };

  useEffect(() => {
    if (dataTasks.status.createTask == "success") {
      dispatch(getActiveTasks());
    }
  }, [dataTasks.status.createTask]);

  const handleOnChangeFormAddTask = (e, actionName) => {
    if (actionName === "taskName") {
      setTaskName(e.target.value);
    }
    if (actionName === "description") {
      setDescription(e.target.value);
    }
  };

  const handleOnClickTask = (actionName, id) => {
    if (actionName === "delete") {
      dispatch(tasksSlice.actions.delete(id));
      dispatch(delTask(id));
    }

    if (actionName === "edit") {
      setShowFormAddTask(true);
      setShowEdit(true);
      setIdEdit(id);
      const current = dataTasks.activeTasksUi.find((e, i) => {
        return e.id === id;
      });
      console.log(current.content);

      if (current) {
        setTaskName(current.content);
        setDescription(current.description);
      }
    }
  };

  useEffect(() => {
    dispatch(getActiveTasks());
  }, []);

  return (
    <>
      <HeaderTask />

      {dataTasks.activeTasksUi.map((e, i) => (
        <>
          <Task
            id={e.id}
            key={`task_${i}`}
            taskName={e.content}
            description={e.description}
            onClick={handleOnClickTask}
          />
          {idEdit === e.id && showFormAddTask && showEdit && (
            <FormAddTask
              onChange={handleOnChangeFormAddTask}
              onClick={handleOnClickFormAddTask}
              taskName={taskName}
              description={description}
              save={true}
            />
          )}
        </>
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

      {showFormAddTask && !showEdit && (
        <FormAddTask
          onChange={handleOnChangeFormAddTask}
          onClick={handleOnClickFormAddTask}
          taskName={taskName}
          description={description}
        />
      )}
    </>
  );
}

export default ContentTask;
