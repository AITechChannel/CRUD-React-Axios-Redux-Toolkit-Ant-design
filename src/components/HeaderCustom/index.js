import "antd/dist/antd.css";
import classNames from "classnames/bind";
import {
  AiOutlineBell,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineRise,
} from "react-icons/ai";
import { SiDeepnote } from "react-icons/si";
import styles from "./HeaderCustom.module.scss";
import { Layout } from "antd";
import Search from "antd/lib/input/Search";

const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

function HeaderCustom() {
  return (
    <Header className={cx("header")}>
      <div className={cx("logo")}>
        <span>
          <SiDeepnote />
        </span>
        <span className={cx("title")}>Tuananh Doan</span>
        <Search
          placeholder="input search text"
          allowClear
          // onSearch={onSearch}
          enterButton
          className={cx("search")}
        />
      </div>

      <div className={cx("menu")}>
        <span className={cx("menu-item")}>
          <AiOutlinePlus />
        </span>
        <span className={cx("menu-item")}>
          <AiOutlineRise />
        </span>
        <span className={cx("menu-item")}>
          <AiOutlineQuestionCircle />
        </span>
        <span className={cx("menu-item")}>
          <AiOutlineBell />
        </span>
      </div>
    </Header>
  );
}

export default HeaderCustom;
