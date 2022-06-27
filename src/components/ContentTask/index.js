import {
  CarryOutOutlined,
  CommentOutlined,
  ControlOutlined,
  DownloadOutlined,
  InboxOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Divider, Layout } from "antd";
import "antd/dist/antd.css";
import {
  AiOutlineControl,
  AiOutlineMessage,
  AiOutlineMore,
  AiOutlinePlus,
} from "react-icons/ai";
import FormAddTask from "../FormAddTask";

import classNames from "classnames/bind";
import styles from "./ContentTask.module.scss";
const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

function ContentTask() {
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
      <Button size="large" type="text" icon={<PlusOutlined />}>
        Add task
      </Button>
      <FormAddTask />
    </>
  );
}

export default ContentTask;
