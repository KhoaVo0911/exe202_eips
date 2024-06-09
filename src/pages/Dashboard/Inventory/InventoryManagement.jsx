import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Người dùng", width: 150 },
  { field: "phone", headerName: "SĐT", width: 130 },
  {
    field: "totalAmount",
    headerName: "Tổng tiền",
    type: "number",
    width: 130,
  },
];

const rows = [
  { id: 1, username: "Jon Snow", phone: "123-456-7890", totalAmount: 35000 },
  {
    id: 2,
    username: "Cersei Lannister",
    phone: "234-567-8901",
    totalAmount: 42000,
  },
  {
    id: 3,
    username: "Jaime Lannister",
    phone: "345-678-9012",
    totalAmount: 45000,
  },
  { id: 4, username: "Arya Stark", phone: "456-789-0123", totalAmount: 16000 },
  {
    id: 5,
    username: "Daenerys Targaryen",
    phone: "567-890-1234",
    totalAmount: 0,
  },
  { id: 6, username: "Melisandre", phone: "678-901-2345", totalAmount: 150000 },
  {
    id: 7,
    username: "Ferrara Clifford",
    phone: "789-012-3456",
    totalAmount: 44000,
  },
  {
    id: 8,
    username: "Rossini Frances",
    phone: "890-123-4567",
    totalAmount: 36000,
  },
  {
    id: 9,
    username: "Harvey Roxie",
    phone: "901-234-5678",
    totalAmount: 65000,
  },
];

export default function InventoryManagement({ value, onChange }) {
  return (
    <div>
      <h2 className="text-2xl mb-4 text-start font-bold">Tổng Đơn Hàng</h2>
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
