import React, { useState } from "react";
import Card from "./Card";
import sk1 from "../../../assets/images/sk1.png";
import sk2 from "../../../assets/images/sk2.png";
import sk3 from "../../../assets/images/sk3.png";
import sk4 from "../../../assets/images/sk4.png";
import sk5 from "../../../assets/images/sk5.png";
import sk6 from "../../../assets/images/sk6.png";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "./Card.scss"; // Import the CSS file for styling

const data = [
  {
    id: 1,
    image: sk1,
    title: "FPT EDU’S GOT TALENT 2023 – SLAY YOUR WAY",
    description: "Tổng doanh thu: 16,000,000 VNĐ",
    startdate: "DEC 21",
    tableData: [
      {
        id: "1",
        shop: "Shop A",
        status: "Hoàn thành",
        quantity: "50",
        expectedSales: "5,000,000 VNĐ",
        customerPaid: "4,500,000 VNĐ",
        totalRevenue: "10,000,000 VNĐ",
      },
      {
        id: "2",
        shop: "Shop B",
        status: "Hoàn thành",
        quantity: "30",
        expectedSales: "3,000,000 VNĐ",
        customerPaid: "2,500,000 VNĐ",
        totalRevenue: "6,000,000 VNĐ",
      },
    ],
  },
  {
    id: 2,
    image: sk2,
    title: "LÊ HỘI VĂN HÓA CHI CHI CHÀNH CHÀNH",
    description: "Tổng doanh thu: 12,000,000 VNĐ",
    startdate: "JUL 11",
    tableData: [
      {
        id: "3",
        shop: "Shop C",
        status: "Hoàn thành",
        quantity: "40",
        expectedSales: "4,000,000 VNĐ",
        customerPaid: "3,500,000 VNĐ",
        totalRevenue: "8,000,000 VNĐ",
      },
      {
        id: "4",
        shop: "Shop D",
        status: "Hoàn thành",
        quantity: "20",
        expectedSales: "2,000,000 VNĐ",
        customerPaid: "1,500,000 VNĐ",
        totalRevenue: "4,000,000 VNĐ",
      },
    ],
  },
  {
    id: 3,
    image: sk3,
    title: "HALLOWEEN 2023: MỘNG ĐỊA I CÕI ÂM",
    description: "Tổng doanh thu: 17,000,000 VNĐ",
    startdate: "OCT 31",
    tableData: [
      {
        id: "5",
        shop: "Shop E",
        status: "Hoàn thành",
        quantity: "60",
        expectedSales: "6,000,000 VNĐ",
        customerPaid: "5,500,000 VNĐ",
        totalRevenue: "12,000,000 VNĐ",
      },
      {
        id: "6",
        shop: "Shop F",
        status: "Hoàn thành",
        quantity: "25",
        expectedSales: "2,500,000 VNĐ",
        customerPaid: "2,000,000 VNĐ",
        totalRevenue: "5,000,000 VNĐ",
      },
    ],
  },
  {
    id: 4,
    image: sk4,
    title: "FES-SPORTLIGHT #6 ÁNH VÀNG HUY CHƯƠNG",
    description: "Tổng doanh thu: 21,000,000 VNĐ",
    startdate: "MAY 23",
    tableData: [
      {
        id: "7",
        shop: "Shop G",
        status: "Hoàn thành",
        quantity: "70",
        expectedSales: "7,000,000 VNĐ",
        customerPaid: "6,500,000 VNĐ",
        totalRevenue: "14,000,000 VNĐ",
      },
      {
        id: "8",
        shop: "Shop H",
        status: "Hoàn thành",
        quantity: "35",
        expectedSales: "3,500,000 VNĐ",
        customerPaid: "3,000,000 VNĐ",
        totalRevenue: "7,000,000 VNĐ",
      },
    ],
  },
  {
    id: 5,
    image: sk5,
    title: "FES-CAMP #4 THANG ÂM VIỆT",
    description: "Tổng doanh thu: 17,000,000 VNĐ",
    startdate: "APR 26",
    tableData: [
      {
        id: "9",
        shop: "Shop I",
        status: "Hoàn thành",
        quantity: "55",
        expectedSales: "5,500,000 VNĐ",
        customerPaid: "5,000,000 VNĐ",
        totalRevenue: "11,000,000 VNĐ",
      },
      {
        id: "10",
        shop: "Shop J",
        status: "Hoàn thành",
        quantity: "30",
        expectedSales: "3,000,000 VNĐ",
        customerPaid: "2,500,000 VNĐ",
        totalRevenue: "6,000,000 VNĐ",
      },
    ],
  },
  {
    id: 6,
    image: sk6,
    title: "GIẢI ĐẤU CỜ VUA – KHAI XUÂN KỶ HỢI 2024",
    description: "Tổng doanh thu: 13,000,000 VNĐ",
    startdate: "FEB 25",
    tableData: [
      {
        id: "11",
        shop: "Shop K",
        status: "Hoàn thành",
        quantity: "45",
        expectedSales: "4,500,000 VNĐ",
        customerPaid: "4,000,000 VNĐ",
        totalRevenue: "9,000,000 VNĐ",
      },
      {
        id: "12",
        shop: "Shop L",
        status: "Hoàn thành",
        quantity: "20",
        expectedSales: "2,000,000 VNĐ",
        customerPaid: "1,500,000 VNĐ",
        totalRevenue: "4,000,000 VNĐ",
      },
    ],
  },
  {
    id: 7,
    image: sk1,
    title: "TRIỂN LÃM NGHỆ THUẬT HIỆN ĐẠI 2024",
    description: "Tổng doanh thu: 24,000,000 VNĐ",
    startdate: "JAN 10",
    tableData: [
      {
        id: "13",
        shop: "Shop M",
        status: "Hoàn thành",
        quantity: "80",
        expectedSales: "8,000,000 VNĐ",
        customerPaid: "7,500,000 VNĐ",
        totalRevenue: "16,000,000 VNĐ",
      },
      {
        id: "14",
        shop: "Shop N",
        status: "Hoàn thành",
        quantity: "40",
        expectedSales: "4,000,000 VNĐ",
        customerPaid: "3,500,000 VNĐ",
        totalRevenue: "8,000,000 VNĐ",
      },
    ],
  },
  {
    id: 8,
    image: sk2,
    title: "ĐÊM NHẠC TRUYỀN THỐNG VIỆT",
    description: "Tổng doanh thu: 16,000,000 VNĐ",
    startdate: "MAR 15",
    tableData: [
      {
        id: "15",
        shop: "Shop O",
        status: "Hoàn thành",
        quantity: "50",
        expectedSales: "5,000,000 VNĐ",
        customerPaid: "4,500,000 VNĐ",
        totalRevenue: "10,000,000 VNĐ",
      },
      {
        id: "16",
        shop: "Shop P",
        status: "Hoàn thành",
        quantity: "30",
        expectedSales: "3,000,000 VNĐ",
        customerPaid: "2,500,000 VNĐ",
        totalRevenue: "6,000,000 VNĐ",
      },
    ],
  },
  {
    id: 9,
    image: sk3,
    title: "LIÊN HOAN PHIM QUỐC TẾ 2024",
    description: "Tổng doanh thu: 19,000,000 VNĐ",
    startdate: "SEP 05",
    tableData: [
      {
        id: "17",
        shop: "Shop Q",
        status: "Hoàn thành",
        quantity: "60",
        expectedSales: "6,000,000 VNĐ",
        customerPaid: "5,500,000 VNĐ",
        totalRevenue: "12,000,000 VNĐ",
      },
      {
        id: "18",
        shop: "Shop R",
        status: "Hoàn thành",
        quantity: "35",
        expectedSales: "3,500,000 VNĐ",
        customerPaid: "3,000,000 VNĐ",
        totalRevenue: "7,000,000 VNĐ",
      },
    ],
  },
  {
    id: 10,
    image: sk4,
    title: "HỘI THẢO CÔNG NGHỆ 4.0",
    description: "Tổng doanh thu: 22,000,000 VNĐ",
    startdate: "AUG 18",
    tableData: [
      {
        id: "19",
        shop: "Shop S",
        status: "Hoàn thành",
        quantity: "70",
        expectedSales: "7,000,000 VNĐ",
        customerPaid: "6,500,000 VNĐ",
        totalRevenue: "14,000,000 VNĐ",
      },
      {
        id: "20",
        shop: "Shop T",
        status: "Hoàn thành",
        quantity: "40",
        expectedSales: "4,000,000 VNĐ",
        customerPaid: "3,500,000 VNĐ",
        totalRevenue: "8,000,000 VNĐ",
      },
    ],
  },
];

const CardEvent = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  const loadMore = () => {
    setVisibleCards((prev) => prev + 3);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <div className="card-list">
        {data.slice(0, visibleCards).map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            startdate={item.startdate}
            onViewClick={() => handleClickOpen(item)}
          />
        ))}
      </div>
      <div className="clearfix"></div>
      {visibleCards < data.length && (
        <button className="btn-load-more" onClick={loadMore}>
          Load More
        </button>
      )}

      {selectedCard && (
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <div className="flex justify-between">
            <DialogTitle>{selectedCard.title}</DialogTitle>
            <a href="/shop">
              {" "}
              <Button
                variant="contained"
                disableElevation
                style={{ fontSize: "12px", padding: "10px", margin: "10px" }}
              >
                Tạo mới cửa hàng
              </Button>
            </a>
          </div>

          <DialogContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>SHOP</TableCell>
                    <TableCell>TRẠNG THÁI</TableCell>
                    <TableCell>SỐ LƯỢNG SẢN PHẨM</TableCell>
                    <TableCell>DOANH SỐ DỰ KIẾN</TableCell>
                    <TableCell>KHÁCH ĐÃ TRẢ</TableCell>
                    <TableCell>TỔNG DOANH THU</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedCard.tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.shop}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.expectedSales}</TableCell>
                      <TableCell>{row.customerPaid}</TableCell>
                      <TableCell>{row.totalRevenue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CardEvent;
