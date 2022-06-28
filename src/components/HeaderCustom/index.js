import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Layout, Modal } from "antd";
import "antd/dist/antd.css";
import Search from "antd/lib/input/Search";
import classNames from "classnames/bind";
import { useState } from "react";
import {
  AiOutlineBell,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineRise,
} from "react-icons/ai";
import FormAddTask from "../ContentTask/components/FormAddTask";
import FormAddTaskModal from "../ContentTask/components/FormAddTaskModal";
import styles from "./HeaderCustom.module.scss";

const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

function HeaderCustom() {
  const [showSearchInput, setShowSearchInput] = useState(true);

  return (
    <Header className={cx("header")}>
      <Button className={cx("search-tablet")} icon={<MenuOutlined />} />
      <div className={cx("logo")}>
        <a>
          <span>
            <HomeOutlined />
          </span>
          <span className={cx("title")}>Tuananh Doan</span>
        </a>

        <Search
          placeholder="input search text"
          allowClear
          // onSearch={onSearch}
          enterButton
          className={cx("search")}
        />
      </div>

      <div className={cx("menu")}>
        <Button
          size="large"
          className={cx("menu-item")}
          icon={<AiOutlinePlus />}
        />
        <Button
          size="large"
          className={cx("menu-item")}
          icon={<AiOutlineRise />}
        />
        <Button
          size="large"
          className={cx("menu-item")}
          icon={<AiOutlineQuestionCircle />}
        />
        <Button
          size="large"
          className={cx("menu-item")}
          icon={<AiOutlineBell />}
        />
        <div className={cx("menu-item", "avatar")}></div>
      </div>
    </Header>
  );
}

export default HeaderCustom;
