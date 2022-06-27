import "antd/dist/antd.css";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./SiderCustom.module.scss";
import {
  CalendarOutlined,
  InboxOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import HeaderCustom from "../../components/HeaderCustom";
import {
  AiOutlineCalendar,
  AiOutlineInbox,
  AiOutlinePlus,
  AiOutlineRead,
} from "react-icons/ai";
import AddTask from "../AddTask";

const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

const items1 = [AiOutlineInbox, AiOutlineCalendar, AiOutlineRead].map(
  (icon, index) => {
    const key = String(index);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
    };
  }
);

function SiderCustom({ children }) {
  const [menuItem, setMenuItem] = useState(["sdfsdf"]);

  const handleClickAddTask = (e) => {
    e.stopPropagation();
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={200}
        className={cx("sider-container", "sider-bg")}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <Menu.Item key={1} icon={<InboxOutlined />}>
            Inbox
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />}>Today</Menu.Item>
          <Menu.SubMenu title="Project">
            <AddTask />
            <Menu.Item>JavaScript</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>

      <Layout
        style={{
          padding: " 24px",
        }}
      >
        <Content
          className={cx("sider-bg")}
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default SiderCustom;
