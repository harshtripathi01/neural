import axios from "axios";

const BASE_URL = "http://localhost:8500";
const TOKEN = "your_access_token";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getClients = () => api.get("/client");
export const getExperts = () => api.get("/expert");
export const getNetworkMembers = () => api.get("/mynetwork");

export const signupExpert = async (data) => {
  try {
    const response = await api.post("/user/createSignup", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const signupClient = async (data) => {
  try {
    const response = await api.post("/admin/signup", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const loginExpert = async (data) => {
  try {
    const response = await api.post("/user/createSignup", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const loginClient = async (data) => {
  try {
    const response = await api.post("/admin/login", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

//loginVerifyOTP

export const loginVerifyOTP = async (data) => {
  try {
    const response = await api.post("/user/loginVerifyOTP", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

///verifiedWithEmail

export const verifiedWithEmail = async (data) => {
  try {
    const response = await api.post("/admin/verifiedWithEmail", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

///postQuestion

export const postQuestion = async (data) => {
  try {
    const response = await api.post("/query/postQuestion", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
