import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteQuiz = async (qid: string) => {
 const response = await axiosWithCredentials.delete(`${QUIZ_API}/${qid}`);
 return response.data;
};
export const updateQuiz = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quiz._id}`, quiz);
    return data;
  };
  export const findQuizById = async (qid: any) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${qid}`);
    return data;
};

// Questions
export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials
      .get(`${QUIZ_API}/${quizId}/questions`);
  return response.data;
};

export const createQuestionForQuiz = async (quizId: any, question: any) => {
  const response = await axiosWithCredentials.post(
      `${QUIZ_API}/${quizId}/questions`,
      question
  );
  return response.data;
};

export const deleteQuestion = async (qid: String, questionId: string) => {
  const response = await axiosWithCredentials.delete(`${QUIZ_API}/${qid}/questions/${questionId}`);
  return response.data;
 };

 export const updateQuestion = async (quiz: any, question: any) => {
  const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quiz._id}/question/${question._id}`, question);
  return data;
};
export const findQuestionById = async (questionId: any, qid: any) => {
  const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${qid}/questions/${questionId}`);
  return data;
};

  
