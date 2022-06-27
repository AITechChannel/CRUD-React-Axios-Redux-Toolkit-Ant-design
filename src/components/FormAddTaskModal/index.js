import { message, Modal } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./FormAddTaskModal.module.scss";
const cx = classNames.bind(styles);
const FormAddTaskModal = ({ showForm }) => {
  console.log(showForm);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (showForm) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  });

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <>
      <Modal
        title="Add project"
        visible={isModalVisible}
        // onOk={() => handleOnClick("close")}
        // onCancel={() => handleOnClick("close")}
      ></Modal>
    </>
  );
};

export default FormAddTaskModal;
