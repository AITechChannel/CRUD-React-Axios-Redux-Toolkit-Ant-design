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
import { useDispatch, useSelector } from "react-redux";
import tasksSlice, {
  createTask,
  getActiveTasks,
} from "../../../../Redux/sliceReducer/tasksSlice";
const cx = classNames.bind(styles);
const { TextArea } = Input;

function FormAddTask({ taskName, description, onClick, onChange, save }) {
  const handleOnClick = (actionName) => {
    onClick(actionName);
  };

  const handleOnChange = (e, actionName) => {
    onChange(e, actionName);
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
          onChange={(e) => handleOnChange(e, "taskName")}
        />

        <TextArea
          placeholder="Desciption"
          bordered={false}
          autoSize={{ minRows: 2 }}
          className={cx("text-area")}
          value={description}
          onChange={(e) => handleOnChange(e, "description")}
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
        {!save && (
          <Button
            onClick={() => handleOnClick("addTask")}
            style={{ marginRight: 10 }}
            size="large"
            type="primary"
          >
            Add task
          </Button>
        )}
        {save && (
          <Button
            onClick={() => handleOnClick("save")}
            style={{ marginRight: 10 }}
            size="large"
            type="primary"
          >
            Save
          </Button>
        )}
      </div>
    </>
  );
}

FormAddTask.prototype = {
  onClick: PropTypes.func,
};
export default FormAddTask;
