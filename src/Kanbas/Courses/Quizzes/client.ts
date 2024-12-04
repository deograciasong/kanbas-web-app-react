import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteAssignment = async (qid: string) => {
 const response = await axiosWithCredentials.delete(`${QUIZ_API}/${qid}`);
 return response.data;
};
export const updateAssignment = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quiz._id}`, quiz);
    return data;
  };
  export const findAssignmentById = async (qid: any) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${qid}`);
    return data;
};
  
