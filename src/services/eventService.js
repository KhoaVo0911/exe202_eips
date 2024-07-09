import axios from "axios";

const BASE_URL = "https://66598fc6de346625136cf421.mockapi.io"; 

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    console.log("API response:", response.data); // Log dữ liệu API trả về
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};  

export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${BASE_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/events/${eventId}`,
      eventData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating event with ID ${eventId}:`, error);
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting event with ID ${eventId}:`, error);
    throw error;
  }
};

export const getEventVendorList = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}/vendors`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching vendors for event with ID ${eventId}:`,
      error
    );
    throw error;
  }
};

export const saveEventVendorList = async (eventId, vendorList) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/events/${eventId}/vendors`,
      vendorList
    );
    return response.data;
  } catch (error) {
    console.error(`Error saving vendors for event with ID ${eventId}:`, error);
    throw error;
  }
};
