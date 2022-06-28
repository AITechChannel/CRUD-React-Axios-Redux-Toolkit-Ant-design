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
import AddTask from "../AddProject";
import AddProject from "../AddProject";

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
  const items = [
    { label: "Inbox", key: "inbox", icon: <InboxOutlined /> }, // remember to pass the key prop
    { label: "Today", key: "today", icon: <CalendarOutlined /> }, // which is required
    {
      label: "Project",
      key: "project",
      children: [{ label: "Name project", key: "proj-1" }],
    },
  ];
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={200}
        className={cx("sider-container", "sider-bg")}
      >
        <AddProject />
        <Menu
          mode="inline"
          defaultSelectedKeys={["inbox"]}
          defaultOpenKeys={["project"]}
          items={items}
        ></Menu>
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
