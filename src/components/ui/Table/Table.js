import { Divider, Table, Input, Pagination } from "antd";

const TableT = ({
  columns = [],
  data = [],
  rowKey = "id",
  Element,
  rowSelection,
  pagination,
}) => {
  return (
    <div>
      <Divider />

      {Element && <Element />}

      <Table
        rowKey={rowKey}
        {...(rowSelection && data.length > 0
          ? { rowSelection: { type: "checkbox", ...rowSelection } }
          : {})}
        columns={columns}
        dataSource={data}
        locale={{ emptyText: "Không có dữ liệu " }}
        pagination={false}
      />

      {pagination && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Pagination
            style={{ margin: "20px 0px" }}
            defaultCurrent={pagination.default}
            total={pagination.total}
          />
        </div>
      )}
    </div>
  );
};

export default TableT;
