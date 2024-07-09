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
    shopname: "Shop Naruto",
    status: "Hoạt động",
    quantity: 50,
    phone: "123-456-7890",
    expectedSales: 2000000, // đã chuyển đổi từ 50000 thành 50 triệu
    totalAmount: 5000000, // đã chuyển đổi từ 35000 thành 35 triệu
  },
  {
    id: 2,
    shopname: "Shop Dragon Ball",
    status: "Hoạt động",
    quantity: 70,
    phone: "234-567-8901",
    expectedSales: 3000000, // đã chuyển đổi từ 60000 thành 60 triệu
    totalAmount: 4000000, // đã chuyển đổi từ 42000 thành 42 triệu
  },
  {
    id: 3,
    shopname: "Shop One Piece",
    status: "Tạm ngừng",
    quantity: 30,
    phone: "345-678-9012",
    expectedSales: 150000, // đã chuyển đổi từ 30000 thành 30 triệu
    totalAmount: 2200000, // đã chuyển đổi từ 45000 thành 45 triệu
  },
  {
    id: 4,
    shopname: "Shop Attack on Titan",
    status: "Hoạt động",
    quantity: 40,
    phone: "456-789-0123",
    expectedSales: 180000, // đã chuyển đổi từ 40000 thành 40 triệu
    totalAmount: 2000000, // đã chuyển đổi từ 16000 thành 16 triệu
  },
  {
    id: 5,
    shopname: "Shop My Hero Academia",
    status: "Tạm ngừng",
    quantity: 20,
    phone: "567-890-1234",
    expectedSales: 1200000, // đã chuyển đổi từ 20000 thành 20 triệu
    totalAmount: 1800000, // totalAmount đã là 0 triệu nên không cần thay đổi
  },
  {
    id: 6,
    shopname: "Shop Death Note",
    status: "Hoạt động",
    quantity: 100,
    phone: "678-901-2345",
    expectedSales: 1000000, // đã chuyển đổi từ 100000 thành 100 triệu
    totalAmount: 1500000, // đã chuyển đổi từ 150000 thành 150 triệu
  },
  {
    id: 7,
    shopname: "Shop Fullmetal Alchemist",
    status: "Hoạt động",
    quantity: 200,
    phone: "789-012-3456",
    expectedSales: 1100000, // đã chuyển đổi từ 200000 thành 200 triệu
    totalAmount: 4400000, // đã chuyển đổi từ 4400000 thành 4400 triệu
  },
  {
    id: 8,
    shopname: "Shop Sword Art Online",
    status: "Hoạt động",
    quantity: 60,
    phone: "890-123-4567",
    expectedSales: 210000, // đã chuyển đổi từ 60000 thành 60 triệu
    totalAmount: 360000, // đã chuyển đổi từ 36000 thành 36 triệu
  },
  {
    id: 9,
    shopname: "Shop Tokyo Ghoul",
    status: "Tạm ngừng",
    quantity: 10,
    phone: "901-234-5678",
    expectedSales: 550000, // đã chuyển đổi từ 10000 thành 10 triệu
    totalAmount: 650000, // đã chuyển đổi từ 65000 thành 65 triệu
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
