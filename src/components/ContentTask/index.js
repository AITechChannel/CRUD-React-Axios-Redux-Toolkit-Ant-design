import {
  CommentOutlined,
  ControlOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Divider, Layout } from "antd";
import "antd/dist/antd.css";
import FormAddTask from "../FormAddTask";

import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./ContentTask.module.scss";
const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

function ContentTask() {
  const [showFormAddTask, setShowFormAddTask] = useState(false);

  const handleCancel = (a) => {
    if (a === "cancel") {
      setShowFormAddTask(false);
    }
  };
  return (
    <>
      <div className={cx("header")}>
        <h3>Inbox</h3>

        <div className={cx("actions")}>
          <Button
            size="large"
            type="text"
            className={cx("btn-icon")}
            icon={<CommentOutlined />}
            style={{ marginRight: 10 }}
          >
            comment
          </Button>

          <Button
            style={{ marginRight: 10 }}
            size="large"
            type="text"
            icon={<ControlOutlined />}
          >
            View
          </Button>
          <Button size="large" type="text" icon={<MoreOutlined />} />
        </div>
      </div>
      <Divider style={{ margin: "10px 0" }} />

      <Button
        size="large"
        type="text"
        icon={<PlusOutlined />}
        onClick={() => setShowFormAddTask(!showFormAddTask)}
      >
        Add task
      </Button>

      {showFormAddTask && <FormAddTask onClick={handleCancel} />}
    </>
  );
}

export default ContentTask;
