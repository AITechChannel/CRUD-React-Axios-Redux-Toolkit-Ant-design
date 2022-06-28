import React, { useState } from "react";
import { Button, Input } from "antd";
import classNames from "classnames/bind";
import styles from "./FormAddTask.module.scss";
import {
  CarryOutOutlined,
  ClockCircleOutlined,
  FlagOutlined,
  InboxOutlined,
  TagOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  createTask,
  getActiveTasks,
} from "../../../../Redux/sliceReducer/tasksSlice";
const cx = classNames.bind(styles);
const { TextArea } = Input;

function FormAddTask({ onClick }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handleOnClick = (actionName) => {
    onClick(actionName);

    if (actionName === "addTask") {
      dispatch(createTask({ content: taskName, description: description }));
      dispatch(getActiveTasks());
    }
  };
  return (
    <>
      <div className={cx("text-area-container")}>
        <TextArea
          placeholder="Task name"
          bordered={false}
          autoSize={true}
          className={cx("text-area", "title-text")}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <TextArea
          placeholder="Desciption"
          bordered={false}
          autoSize={{ minRows: 6 }}
          className={cx("text-area")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={cx("actions-in")}>
          <div>
            <Button
              style={{ marginRight: 10 }}
              size="large"
              type="outline"
              icon={<CarryOutOutlined />}
            >
              Due date
            </Button>
            <Button size="large" type="outline" icon={<InboxOutlined />}>
              Inbox
            </Button>
          </div>
          <div>
            <Button
              style={{ marginRight: 10 }}
              size="large"
              type="text"
              icon={<TagOutlined />}
            />
            <Button
              style={{ marginRight: 10 }}
              size="large"
              type="text"
              icon={<FlagOutlined />}
            />
            <Button size="large" type="text" icon={<ClockCircleOutlined />} />
          </div>
        </div>
      </div>
      <div className={cx("actions-out")}>
        <Button
          style={{ marginRight: 10 }}
          size="large"
          type="outline"
          onClick={() => handleOnClick("cancel")}
        >
          Cancel
        </Button>
        <Button
          onClick={() => handleOnClick("addTask")}
          style={{ marginRight: 10 }}
          size="large"
          type="primary"
        >
          Add task
        </Button>
      </div>
    </>
  );
}

FormAddTask.prototype = {
  onClick: PropTypes.func,
};
export default FormAddTask;
