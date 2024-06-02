import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: "1",
      question:
        "Hệ thống quản lý ESMS mang lại lợi ích gì cho các doanh nghiệp?",
      answer: [
        "Phần mềm quản lý ESMS hỗ trợ chủ gian hàng quản lý sản phẩm, đơn hàng và khách hàng một cách hiệu quả và chuyên nghiệp. Hệ thống cho phép chủ gian hàng theo dõi tiến độ bán hàng, quản lý lịch đặt hàng và kiểm tra trạng thái tồn kho.",
        "Điều này giúp giảm thiểu sai sót trong việc quản lý và đảm bảo rằng mọi hoạt động kinh doanh diễn ra một cách suôn sẻ và chính xác.",
      ],
    },
    {
      id: "2",
      question:
        "Lợi ích của việc sử dụng ESMS trong quản lý bán hàng tại sự kiện là gì?",
      answer: [
        "ESMS giúp tối ưu hóa quản lý bán hàng tại sự kiện bằng cách cung cấp giải pháp thanh toán nhanh chóng, chính xác và an toàn. Hệ thống đồng bộ doanh thu và giúp theo dõi hiệu suất bán hàng một cách chi tiết, giúp chủ gian hàng dễ dàng đánh giá hiệu quả của từng sản phẩm và chiến dịch marketing.",
        "Bên cạnh đó, ESMS còn giúp nâng cao trải nghiệm khách hàng thông qua việc đơn giản hóa quy trình mua sắm và cung cấp dịch vụ hỗ trợ khách hàng chuyên nghiệp.",
      ],
    },
    {
      id: "3",
      question: "ESMS giúp quản lý đơn hàng như thế nào?",
      answer: [
        "ESMS cung cấp các công cụ mạnh mẽ để theo dõi và quản lý đơn hàng một cách tập trung và hiệu quả. Chủ gian hàng có thể truy cập vào hệ thống để xem chi tiết về từng đơn hàng, bao gồm thông tin khách hàng, trạng thái giao hàng, và các yêu cầu đặc biệt.",
        "Hệ thống cũng cho phép cập nhật trạng thái đơn hàng theo thời gian thực, giúp giảm thiểu sai sót và đảm bảo rằng khách hàng nhận được hàng đúng hẹn.",
      ],
    },
    {
      id: "4",
      question: "ESMS giúp tăng doanh thu cho gian hàng như thế nào?",
      answer: [
        "ESMS giúp gian hàng quảng bá sản phẩm tới người tiêu dùng thông qua các kênh trực tuyến, giúp người mua hàng dễ dàng xem và đặt hàng trực tuyến một cách nhanh chóng.",
        "Hệ thống còn tích hợp các công cụ phân tích để tối ưu hóa chiến lược kinh doanh, giúp giảm chi phí quản lý và tăng hiệu quả hoạt động bán hàng. Bằng cách đơn giản hóa quy trình bán hàng, ESMS giúp gian hàng tăng cường khả năng cạnh tranh và thu hút nhiều khách hàng hơn.",
      ],
    },
    {
      id: "5",
      question:
        "Thông tin của gian hàng được bảo vệ như thế nào khi sử dụng ESMS?",
      answer: [
        "ESMS cam kết bảo vệ thông tin của gian hàng bằng các biện pháp bảo mật tiên tiến như mã hóa dữ liệu và xác thực hai yếu tố. Tất cả dữ liệu về sản phẩm, đơn hàng và khách hàng đều được lưu trữ trên các máy chủ an toàn, đảm bảo rằng chỉ có những người được ủy quyền mới có thể truy cập.",
        "ESMS cũng thực hiện các biện pháp phòng chống xâm nhập và giám sát liên tục để bảo vệ hệ thống khỏi các mối đe dọa an ninh.",
      ],
    },
  ];

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1440px] bg-customHoverBg p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 font-semibold">Câu hỏi thường gặp</h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-2 pl-4 pr-2 text-gray-600"
                >
                  {q.answer.map((a, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {a}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
