import axios from "axios";

const API_URL = "https://66598fc6de346625136cf421.mockapi.io"; // URL của MockAPI

const loginApi = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
          // Thêm các tiêu đề khác nếu cần thiết
        },
      }
    );

    if (!response.data || response.data.length === 0) {
      throw new Error("Invalid username or password");
    }

    console.log("Login API response:", response.data);
    const user = response.data; // Giả sử endpoint trả về thông tin người dùng
    return user;
  } catch (error) {
    console.error("Login API error:", error);
    throw error.response?.data?.message || error.message;
  }
};

export default loginApi;
