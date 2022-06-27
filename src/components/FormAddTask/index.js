import React from "react";
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
const cx = classNames.bind(styles);
const { TextArea } = Input;

function FormAddTask({ onClick }) {
  const handleClick = (actionName) => {
    onClick(actionName);
  };
  return (
    <>
      <div className={cx("text-area-container")}>
        <TextArea
          placeholder="Task name"
          bordered={false}
          autoSize={true}
          className={cx("text-area", "title-text")}
        />

        <TextArea
          placeholder="Desciption"
          bordered={false}
          autoSize={{ minRows: 6 }}
          className={cx("text-area")}
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
          onClick={() => handleClick("cancel")}
        >
          Cancel
        </Button>
        <Button style={{ marginRight: 10 }} size="large" type="primary">
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
