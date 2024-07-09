import axios from "axios";

const BASE_URL = "https://66755630a8d2b4d072ef9da6.mockapi.io/";

// Tạo một instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm lấy danh sách sản phẩm theo vendorId
const getProductListByVendorId = async (vendorId) => {
  try {
    const response = await axiosInstance.get(`/products/vendor/${vendorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};

// Hàm tạo sản phẩm mới cho vendor
const createVendorProduct = async (productData) => {
  try {
    const response = await axiosInstance.post("/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Hàm lấy thông tin sản phẩm theo productId và vendorId
const getProductById = async (vendorId, productId) => {
  try {
    const response = await axiosInstance.get(
      `/products/${vendorId}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Hàm cập nhật thông tin sản phẩm theo productId và vendorId
const updateProduct = async (vendorId, productId, updateData) => {
  try {
    const response = await axiosInstance.put(
      `/products/${vendorId}/${productId}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Hàm xóa sản phẩm theo productId và vendorId
const deleteProduct = async (vendorId, productId) => {
  try {
    const response = await axiosInstance.delete(
      `/products/${vendorId}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Export các hàm API
const productService = {
  getProductListByVendorId,
  createVendorProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default productService;
