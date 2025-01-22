import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume =async (data) => {
  try {
    const response =await axiosClient.post("/user-resumes", data);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating a new resume:",
      error.response || error.message
    );
    throw error;
  }
};
const getResume = async (email) => {
  const response = await axiosClient.get(`/user-resumes?filter[email][$eq]=${email}`);

};

export default {
  CreateNewResume,
  getResume,
};
