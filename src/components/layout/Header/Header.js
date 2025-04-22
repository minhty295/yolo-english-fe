import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"; // Sửa lại import cho đúng
import { useState } from "react";

const Header = ({ dropdown, subject = "" }) => {
  const menu = (
    <Menu>
      {dropdown &&
        dropdown.map((item, index) => {
          return (
            <Menu.Item key={item.title} icon={item.icon}>
              {item.title}
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "white",
        height: 80,
        width: "100%",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginRight: 15 }}>
        <span style={{ marginRight: 12 }}>{subject}</span>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
