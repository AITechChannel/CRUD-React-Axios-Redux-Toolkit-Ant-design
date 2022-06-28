import { Button, Input, Menu, message, Modal, Switch } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames/bind";
import { useState } from "react";

import SelectColor from "./components/SelectColor";
import styles from "./AddProject.module.scss";

const cx = classNames.bind(styles);

const AddProject = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Red",
          key: "1",
          icon: <div className={cx("icon-item", "icon-red")}></div>,
        },
        {
          label: "Yellow",
          key: "2",
          icon: <div className={cx("icon-item", "icon-yellow")}></div>,
        },
      ]}
    />
  );

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add project
      </Button>
      <Modal
        title="Add project"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={cx("input-container")}>
          <span>Name</span>
          <Input />
        </div>
        {/* 
        <div className={cx("color-container")}>
          <span className={cx("label-color")}>Color</span>
          <Dropdown trigger={"click"} overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className={cx("sub-menu")}>
                  <div className={cx("sub-icon")}></div>
                  <span>color</span>
                </div>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div> */}

        <div className={cx("color-container")}>
          <SelectColor />
        </div>

        <Switch
          // checked={theme === "dark"}
          // onChange={changeTheme}
          checkedChildren="Yes"
          unCheckedChildren="No"
          style={{ marginRight: "10px" }}
        />
        <span>Add to your favorite</span>
      </Modal>
    </>
  );
};

export default AddProject;
