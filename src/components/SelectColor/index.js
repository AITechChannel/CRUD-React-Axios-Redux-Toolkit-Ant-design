import React from "react";
import "antd/dist/antd.css";
import classNames from "classnames/bind";
import styles from "./SelectColor.module.scss";
import { Radio, TreeSelect } from "antd";
import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
const { TreeNode } = TreeSelect;
const cx = classNames.bind(styles);
const SelectColor = () => {
  const [placement, SetPlacement] = useState("bottomLeft");

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <div>
      <span>Select color</span>
      <TreeSelect
        style={{
          width: "100%",
        }}
        showSearch
        // dropdownStyle={{
        //   maxHeight: 400,
        //   overflow: "auto",
        //   minWidth: 300,
        // }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeIcon={<MoreOutlined />}
      >
        <TreeNode
          value="Red"
          title={
            <div className={cx("menu-item")}>
              <div className={cx("color-icon")}></div>
              <span>red</span>
            </div>
          }
        >
          sdfsdffdsdfsdaf
        </TreeNode>
        <TreeNode value="Yellow" title="Yellow" />
      </TreeSelect>
    </div>
  );
};

export default SelectColor;
