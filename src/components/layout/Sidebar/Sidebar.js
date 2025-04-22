import React, { useState } from "react";
import {
  UserOutlined, // Học viên, Giáo viên
  BookOutlined, // Khóa học
  MessageOutlined, // Nhắn tin
  WalletOutlined, // Học phí
  CalendarOutlined, // Sự kiện
  FileDoneOutlined, // Báo cáo
  SettingOutlined, // Cài đặt
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Menu, ConfigProvider } from "antd";
import "./style.css"; // Đảm bảo đường dẫn và style phù hợp với dự án của bạn
import logo from "../../../assets/images/logo.jpg"; // Đảm bảo đường dẫn logo đúng


const Sidebar = ({ style, collapsed, toggleSidebar, items }) => {
  return (
    <div style={{ paddingTop: 10, ...style }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: !collapsed ? "end" : "start",
          paddingLeft: 20,
          borderRight: !collapsed && "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        {!collapsed && (
          <img
            style={{ marginRight: 50, width: 150 }}
            src={logo}
            alt="Logo"
          />
        )}
        <Button onClick={toggleSidebar} style={{ marginRight: 5 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <ConfigProvider>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          style={{ height: "100%" }}
        />
      </ConfigProvider>
    </div>
  );
};

export default Sidebar;
