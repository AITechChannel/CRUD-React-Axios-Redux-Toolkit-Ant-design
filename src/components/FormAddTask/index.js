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
const cx = classNames.bind(styles);
const { TextArea } = Input;
function FormAddTask() {
  return (
    <>
      <div className={cx("text-area-container")}>
        <TextArea
          placeholder="Task name"
          bordered={false}
          autoSize={true}
          className={cx("text-area", "title-text")}
        >
          sdfsdf
        </TextArea>
        <TextArea
          placeholder="Desciption"
          bordered={false}
          autoSize={{ minRows: 6 }}
          className={cx("text-area")}
        >
          sdfsdf
        </TextArea>
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
        <Button style={{ marginRight: 10 }} size="large" type="outline">
          Cancel
        </Button>
        <Button style={{ marginRight: 10 }} size="large" type="primary">
          Add task
        </Button>
      </div>
    </>
  );
}

export default FormAddTask;
