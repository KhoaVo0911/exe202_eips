import React, { useState } from 'react';
import Card from './Card';
import sk1 from "../../assets/images/sk1.png";
import sk2 from "../../assets/images/sk2.png";
import sk3 from "../../assets/images/sk3.png";
import sk4 from "../../assets/images/sk4.png";
import sk5 from "../../assets/images/sk5.png";
import sk6 from "../../assets/images/sk6.png";
import "./Card.scss"; // Import the CSS file for styling

const data = [
    // Existing data
    {
      id: 1,
      image: sk1,
      title: "FPT EDU’S GOT TALENT 2023 – SLAY YOUR WAY",
      description: "CUỘC THI TÌM KIẾM TÀI NĂNG FPT EDU’S GOT TALENT 2023",
      startdate: "DEC 21"
    },
    {
      id: 2,
      image: sk2,
      title: "LÊ HỘI VĂN HÓA CHI CHI CHÀNH CHÀNH",
      description: "LÊ HỘI VĂN HÓA CHI CHI CHÀNH CHÀNH 2024: ĐẤT VIỆT TRỜI NAM",
      startdate: "JUL 11"
    },
    {
      id: 3,
      image: sk3,
      title: "HALLOWEEN 2023: MỘNG ĐỊA I CÕI ÂM",
      description: "Cơn ác mộng đêm nay, bóng ma đầy ẩn số. Nắm bạn trẻ trở mình, vén lớp bí ẩn khởi.",
      startdate: "OCT 31"
    },
    {
      id: 4,
      image: sk4,
      title: "FES-SPORTLIGHT #6 ÁNH VÀNG HUY CHƯƠNG",
      description: "HÀNH TRÌNH MANG 'VÀNG' VỀ CHO ĐOÀN THỂ THAO VIỆT NAM",
      startdate: "MAY 23"
    },
    {
      id: 5,
      image: sk5,
      title: "FES-CAMP #4 THANG ÂM VIỆT",
      description: "CHƯƠNG TRÌNH BIỂU DIỄN ÂM NHẠC TRUYỀN THỐNG",
      startdate: "APR 26"
    },
    {
      id: 6,
      image: sk6,
      title: "GIẢI ĐẤU CỜ VUA – KHAI XUÂN KỶ HỢI 2024",
      description: "Chơi cờ vua là nghệ thuật, còn là người chơi cờ đích thực là nghệ sĩ.",
      startdate: "FEB 25"
    },
    // New data
    {
      id: 7,
      image: sk1,
      title: "TRIỂN LÃM NGHỆ THUẬT HIỆN ĐẠI 2024",
      description: "Cuộc triển lãm nghệ thuật hiện đại với sự góp mặt của nhiều nghệ sĩ nổi tiếng.",
      startdate: "JAN 10"
    },
    {
      id: 8,
      image: sk2,
      title: "ĐÊM NHẠC TRUYỀN THỐNG VIỆT",
      description: "Chương trình biểu diễn nhạc cụ truyền thống của các nghệ sĩ trẻ.",
      startdate: "MAR 15"
    },
    {
      id: 9,
      image: sk3,
      title: "LIÊN HOAN PHIM QUỐC TẾ 2024",
      description: "Sự kiện quy tụ các bộ phim xuất sắc từ nhiều quốc gia trên thế giới.",
      startdate: "SEP 05"
    },
    {
      id: 10,
      image: sk4,
      title: "HỘI THẢO CÔNG NGHỆ 4.0",
      description: "Cập nhật những xu hướng công nghệ mới nhất trong cuộc cách mạng 4.0.",
      startdate: "AUG 18"
    }
];

const CardList = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    setVisibleCards(prev => prev + 3);
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div>
      <div className="card-list">
        {data.slice(0, visibleCards).map(item => (
          <Card 
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            startdate={item.startdate}
          />
        ))}
      </div>
      <div className="clearfix"></div>
      {visibleCards < data.length && (
        <button className="btn-load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default CardList;
