import {
  Button,
  Select,
  Input,
  Modal,
  Form,
  Radio,
  message,
  Row,
  Col,
} from "antd";
import { useState } from "react";
import TableT from "../../components/ui/Table/Table";
import { EditFilled, DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
const { Search } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
    class: "bg-colunm",
  },
  {
    title: "Age",
    dataIndex: "age",
    class: "bg-colunm",
  },
  {
    title: "Address",
    dataIndex: "address",
    class: "bg-colunm",
  },
  {
    title: "Hành Động",
    dataIndex: "action",
    class: "bg-colunm",
    render: (_, record) => {
      return (
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            type="primary"
            onClick={() => {
              alert(JSON.stringify(record));
            }}
          >
            <EditFilled />
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => {
              alert(JSON.stringify(record));
            }}
          >
            <DeleteFilled />
          </Button>
        </div>
      );
    },
  },
];

const data = [
  {
    id: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    id: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
  {
    id: "5",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = async (values) => {
  alert("Thành công");
};

const levels = [
  { value: "starter", label: "Mới bắt đầu (Starter - A1)" },
  { value: "elementary", label: "Sơ cấp (Elementary - A2)" },
  {
    value: "pre-intermediate",
    label: "Tiền trung cấp (Pre-Intermediate - B1)",
  },
  { value: "intermediate", label: "Trung cấp (Intermediate - B1+)" },
  {
    value: "upper-intermediate",
    label: "Trung cấp nâng cao (Upper-Intermediate - B2)",
  },
  { value: "advanced", label: "Nâng cao (Advanced - C1)" },
  { value: "proficient", label: "Thành thạo (Proficient - C2)" },
  { value: "ielts-foundation", label: "IELTS cơ bản" },
  { value: "toeic-basic", label: "TOEIC cơ bản" },
  { value: "giao-tiep-co-ban", label: "Giao tiếp cơ bản" },
  { value: "giao-tiep-nang-cao", label: "Giao tiếp nâng cao" },
];

const Student = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("Dữ liệu hợp lệ:", values);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log("Lỗi:", error);
    }
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const Elements = () => {
    return (
      <div
        style={{
          marginTop: 15,
          marginBottom: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <Button onClick={showModal} type="primary" size="large">
            <PlusOutlined /> <span>Thêm mới</span>
          </Button>

          <Select
            size="large"
            defaultValue="jack"
            style={{ minWidth: 150 }}
            onChange={(value) => {
              alert(value);
            }}
            options={[
              { value: "jack", label: "Tất cả chức vụ" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </div>

        <div style={{ display: "flex" }}>
          <Search
            size="large"
            placeholder="Tìm kiếm"
            allowClear
            onSearch={(value, _, info) => {
              alert(value);
            }}
            style={{ width: 250 }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "20px 15px",
        backgroundColor: "white",
        borderRadius: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <span style={{ color: "#002329", fontSize: "1.1rem" }}>
        <Link style={{ textDecoration: "none", color: "#1677ff" }}>
          {" Quản lý học viên / Danh sách học viên"}
        </Link>
      </span>

      <TableT
        columns={columns}
        data={data}
        Element={Elements}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={{ default: 1, total: 100 }}
      />

      <Modal
        title="Thêm Thông Tin Học Viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button size="large" key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button size="large" key="save" type="primary" onClick={handleOk}>
            Thêm
          </Button>,
        ]}
      >
        <Form
          name="basic"
          // initialValues={{
          //   remember: true,
          // }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          form={form}
          autoComplete="off"
          layout="vertical"
        >
          <Row gutter={15}>
            <Col span={8}>
              <Form.Item
                label="Họ và tên"
                name="fullname"
                rules={[
                  { required: true, message: "Vui lòng nhập họ và tên!" },
                ]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Ngày sinh"
                name="birthday"
                rules={[
                  { required: true, message: "Vui lòng chọn ngày sinh!" },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Giới tính"
                name="gender"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Select placeholder={"Chọn giới tính"}>
                  <Select.Option value="true">Nam</Select.Option>
                  <Select.Option value="false">Nữ</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={15}>
            <Col span={8}>
              <Form.Item
                label="Trình độ đầu vào"
                name="level"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn trình độ đầu vào!",
                  },
                ]}
              >
                <Select
                  placeholder="Chọn trình độ đầu vào"
                  showSearch={true}
                  optionFilterProp="children"
                >
                  {levels.map((item) => (
                    <Select.Option key={item.value} value={item.value}>
                      {item.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={15}>
            <Col span={8}>
              <Form.Item label="Họ và tên phụ huynh" name="parentName">
                <Input placeholder="Nhập họ và tên phụ huynh" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Số điện thoại phụ huynh" name="parentPhone">
                <Input placeholder="Nhập số điện thoại phụ huynh" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Mối quan hệ với phụ huynh" name="relationship">
                <Input placeholder="Nhập mối quan hệ với phụ huynh" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={15}>
            <Col span={24}>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ thường trú!",
                  },
                ]}
                label="Địa chỉ thường trú"
              >
                <TextArea placeholder="Nhập địa chỉ thường trú" rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Student;
