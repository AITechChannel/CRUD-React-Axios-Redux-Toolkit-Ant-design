import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Divider } from "antd";
import classNames from "classnames/bind";
import styles from "./Task.module.scss";
const cx = classNames.bind(styles);

function Task({ taskName, description, onClick, id }) {
  const handleOnClick = (actionName, id) => {
    console.log(id);
    onClick(actionName, id);
  };
  return (
    <div className={cx("task-container")}>
      <div className={cx("task")}>
        <div className={cx("check-box")}>
          <Checkbox />
        </div>
        <div className={cx("content")}>
          <div className={cx("title")}>{taskName}</div>
          <div className={cx("des")}>{description}</div>
        </div>
        <div>
          <EditOutlined
            onClick={() => handleOnClick("edit", id)}
            style={{ marginRight: 20 }}
          />
          <DeleteOutlined onClick={() => handleOnClick("delete", id)} />
        </div>
      </div>
      <Divider style={{ margin: "8px 0" }} />
    </div>
  );
}

export default Task;
