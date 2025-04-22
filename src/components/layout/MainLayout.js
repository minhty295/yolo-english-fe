import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import {
  UserOutlined,
  BookOutlined,
  MessageOutlined,
  WalletOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons";

const sidebarStyle = {
  height: "100vh",
};

const dropdownHeader = [
  { title: "Thông tin người dùng", icon: <UserOutlined /> },
  { title: "  Đăng xuất", icon: <LogoutOutlined /> },
];

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Quản lý học viên",
    children: [
      { key: "1-1", label: <Link to="/admin/student">Danh sách học viên</Link> },
      { key: "1-2", label: <Link to="/admin/student/add">Thêm học viên mới</Link> },
      { key: "1-3", label: <Link to="/admin/student/schedule">Lịch học của học viên</Link> },
      { key: "1-4", label: <Link to="/admin/student/grades">Bảng điểm</Link> },
    ],
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Quản lý giáo viên",
    children: [
      { key: "2-1", label: <Link to="/admin/teacher">Danh sách giáo viên</Link> },
      { key: "2-2", label: <Link to="/admin/teacher/add">Thêm giáo viên mới</Link> },
      { key: "2-3", label: <Link to="/admin/teacher/schedule">Lịch dạy của giáo viên</Link> },
      { key: "2-4", label: <Link to="/admin/teacher/feedback">Chấm điểm & phản hồi</Link> },
    ],
  },
  {
    key: "3",
    icon: <BookOutlined />,
    label: "Quản lý khóa học",
    children: [
      { key: "3-1", label: <Link to="/admin/course">Danh sách khóa học</Link> },
      { key: "3-2", label: <Link to="/admin/course/add">Thêm khóa học mới</Link> },
      { key: "3-3", label: <Link to="/admin/course/assign">Phân công giáo viên</Link> },
      { key: "3-4", label: <Link to="/admin/course/schedule">Lịch học của khóa</Link> },
    ],
  },
  {
    key: "4",
    icon: <MessageOutlined />,
    label: "Nhắn tin",
    children: [
      { key: "4-1", label: <Link to="/admin/chat/student">Nhắn tin với học viên</Link> },
      { key: "4-2", label: <Link to="/admin/chat/teacher">Nhắn tin với giáo viên</Link> },
      { key: "4-3", label: <Link to="/admin/chat/history">Lịch sử tin nhắn</Link> },
    ],
  },
  {
    key: "5",
    icon: <WalletOutlined />,
    label: "Quản lý học phí",
    children: [
      { key: "5-1", label: <Link to="/admin/tuition/payment">Thanh toán học phí</Link> },
      { key: "5-2", label: <Link to="/admin/tuition/history">Lịch sử thanh toán</Link> },
      { key: "5-3", label: <Link to="/admin/tuition/discount">Giảm giá & khuyến mãi</Link> },
    ],
  },
  {
    key: "6",
    icon: <CalendarOutlined />,
    label: "Quản lý sự kiện",
    children: [
      { key: "6-1", label: <Link to="/admin/event/create">Tạo sự kiện mới</Link> },
      { key: "6-2", label: <Link to="/admin/event/list">Danh sách sự kiện</Link> },
      { key: "6-3", label: <Link to="/admin/event/notify">Thông báo sự kiện</Link> },
    ],
  },
  {
    key: "7",
    icon: <FileDoneOutlined />,
    label: "Báo cáo & thống kê",
    children: [
      { key: "7-1", label: <Link to="/admin/report/student">Báo cáo học viên</Link> },
      { key: "7-2", label: <Link to="/admin/report/revenue">Báo cáo doanh thu</Link> },
      { key: "7-3", label: <Link to="/admin/report/teacher">Báo cáo giáo viên</Link> },
    ],
  },
  {
    key: "8",
    icon: <SettingOutlined />,
    label: "Cài đặt",
    children: [
      { key: "8-1", label: <Link to="/admin/settings/account">Cài đặt tài khoản</Link> },
      { key: "8-2", label: <Link to="/admin/settings/system">Cài đặt hệ thống</Link> },
      { key: "8-3", label: <Link to="/admin/settings/roles">Quản lý quyền truy cập</Link> },
    ],
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarWidth = collapsed ? 80 : 256;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: sidebarWidth, transition: "width 0.3s" }}>
        <Sidebar
          items={items}
          style={sidebarStyle}
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div
        style={{
          width: `calc(100% - ${sidebarWidth}px)`,
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s",
        }}
      >
        <div>
          <Header dropdown={dropdownHeader} subject="Lê Minh Ty" />
        </div>

        <div style={{ flex: 1, padding: "15px 20px", backgroundColor: '#F5F5F5' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
