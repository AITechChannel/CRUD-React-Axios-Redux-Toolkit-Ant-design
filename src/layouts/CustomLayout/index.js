import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CustomLayout.module.scss";
import { SiDeepnote } from "react-icons/si";
import "antd/dist/antd.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const MainLayout = ({ children }) => (
  <Layout>
    <Header className={cx("header")}>
      <div className={cx("logo")}>
        <span>
          <SiDeepnote />
        </span>
        <span className={cx("title")}>Tuananh Doan</span>
      </div>
      <Menu
        className={cx("mainNav")}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider width={200} className={cx("site-layout-background")}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className={cx("site-layout-background")}
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
  </Layout>
);

export default MainLayout;
