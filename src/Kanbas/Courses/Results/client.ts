import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const API = process.env.REACT_APP_REMOTE_SERVER;

export const fetchResults = async (userId: string) => {
  const response = await axios.get(`${API}/api/results/${userId}`);
  return response.data;
};


export const saveResult = async (quizId: any, result: any) => {
    const response = await axiosWithCredentials.post(
        `${API}/api/quizzes/${quizId}/results`,
        result
    );
    return response.data;
  };

export const removeResult = async (userId: string, qid: string) => {
  const response = await axios.delete(`${API}/api/results/${userId}/${qid}`);
  return response.data;
};

export const updateResult = async (result: any) => {
    const { data } = await axios.put(`${API}/api/quizzes/${result.quiz}/results/${result._id}`, result);
    return data;
  };

  export const findResultByQuizAndUser = async (quizId: string, userId: string) => {
    const response = await axios.get(`${API}/api/${userId}/quizzes/${quizId}/results`);
    return response.data;
};