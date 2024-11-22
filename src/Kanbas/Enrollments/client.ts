import axios from "axios";

const API = process.env.REACT_APP_REMOTE_SERVER;

export const fetchEnrollments = async (userId: string) => {
  const response = await axios.get(`${API}/api/enrollments/${userId}`);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API}/api/enrollments`, { userId, courseId });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(`${API}/api/enrollments/${userId}/${courseId}`);
  return response.data;
};