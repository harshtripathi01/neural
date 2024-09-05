import axios from "axios";

const BASE_URL = "http://localhost:8500";

const api = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("userData"); // Assuming you store the token in sessionStorage
    if (!!token) {
      config.headers["Authorization"] = JSON.parse(token)?.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
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

export const answerQuestion = async (data) => {
  try {
    let { questionId } = data;
    const response = await api.post(
      `/query/answerQuestion/${questionId}`,
      data
    );
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getAllQuesstion = async () => {
  try {
    const response = await api.get("/query/getAllQuestions");
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const createGroup = async (data) => {
  try {
    const response = await api.post("/chat/group", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getUserChats = async () => {
  try {
    const response = await api.get("/chat/getUserChats");
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getAdminChats = async () => {
  try {
    const response = await api.get("/chat/getAdminChats");
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getSearchChat = async () => {
  try {
    const response = await api.get("/chat/searchChat");
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const createMessage = async (data) => {
  try {
    const response = await api.post("/message/createMessage", data);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
export const getAllMessage = async (id) => {
  try {
    const response = await api.get(`/message/allMessages/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
// user/getAllUser

export const getAllUser = async () => {
  try {
    const response = await api.get("/user/getAllUser");

    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

// admin/getAllAdmin

export const getAllAdmin = async () => {
  try {
    const response = await api.get("/admin/getAllAdmin");
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
