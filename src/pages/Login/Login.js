import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Tooltip, Typography } from "antd";
import logo from "../../assets/images/logo.jpg";
import { useAuth } from "../../routes/AuthProvider";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const { login } = useAuth();

  const onFinish = async (values) => {
    const { success, message } = await login(values);

    if (success) {
      alert("Đăng nhập thành công!");
    } else {
      alert(message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f7f9",
      }}
    >
      <div
        style={{
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 500,
          padding: "20px 30px",
          borderRadius: "10px",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <img
          style={{ marginBottom: 40, width: 230, height: "auto" }}
          src={logo}
          alt="Logo"
        />

        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ minWidth: 400 }}
          initialValues={{
            remember: true,
            username: "minhty295@gmail.com",
            password: "123456",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Typography.Link href="#API">Bạn quên mật khẩu ?</Typography.Link>

          <Form.Item style={{ width: "100%", marginTop: 15 }}>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
