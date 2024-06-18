import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "shopname", headerName: "Shop", width: 150 },
  { field: "status", headerName: "Trạng thái", width: 150 },
  { field: "quantity", headerName: "SL Sản phẩm", width: 150 },
  { field: "phone", headerName: "SĐT", width: 130 },
  {
    field: "expectedSales",
    headerName: "Doanh số dự kiến",
    type: "number",
    width: 200,
  },
  {
    field: "totalAmount",
    headerName: "Doanh thu",
    type: "number",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    shopname: "Cửa hàng A",
    status: "Hoạt động",
    quantity: 50,
    phone: "123-456-7890",
    expectedSales: 50000,
    totalAmount: 35000,
  },
  {
    id: 2,
    shopname: "Cửa hàng B",
    status: "Hoạt động",
    quantity: 70,
    phone: "234-567-8901",
    expectedSales: 60000,
    totalAmount: 42000,
  },
  {
    id: 3,
    shopname: "Cửa hàng C",
    status: "Tạm ngừng",
    quantity: 30,
    phone: "345-678-9012",
    expectedSales: 30000,
    totalAmount: 45000,
  },
  {
    id: 4,
    shopname: "Cửa hàng D",
    status: "Hoạt động",
    quantity: 40,
    phone: "456-789-0123",
    expectedSales: 40000,
    totalAmount: 16000,
  },
  {
    id: 5,
    shopname: "Cửa hàng E",
    status: "Tạm ngừng",
    quantity: 20,
    phone: "567-890-1234",
    expectedSales: 20000,
    totalAmount: 0,
  },
  {
    id: 6,
    shopname: "Cửa hàng F",
    status: "Hoạt động",
    quantity: 100,
    phone: "678-901-2345",
    expectedSales: 100000,
    totalAmount: 150000,
  },
  {
    id: 7,
    shopname: "Cửa hàng G",
    status: "Hoạt động",
    quantity: 200,
    phone: "789-012-3456",
    expectedSales: 200000,
    totalAmount: 4400000,
  },
  {
    id: 8,
    shopname: "Cửa hàng H",
    status: "Hoạt động",
    quantity: 60,
    phone: "890-123-4567",
    expectedSales: 60000,
    totalAmount: 36000,
  },
  {
    id: 9,
    shopname: "Cửa hàng I",
    status: "Tạm ngừng",
    quantity: 10,
    phone: "901-234-5678",
    expectedSales: 10000,
    totalAmount: 65000,
  },
];

export default function SaleOverview({ value, onChange }) {
  const totalRevenue = rows.reduce((sum, row) => sum + row.totalAmount, 0);

  return (
    <div>
      <h2 className="text-2xl mb-4 text-start font-bold">Thống kê doanh thu</h2>
      <div className="flex justify-between">
        {" "}
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          style={{
            marginBottom: "20px",
            width: "250px",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <p className="font-bold text-xl">
          Tổng doanh thu:{" "}
          {totalRevenue.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
