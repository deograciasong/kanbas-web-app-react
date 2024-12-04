import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteAssignment = async (aid: string) => {
 const response = await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${aid}`);
 return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
  };
  export const findAssignmentById = async (aid: any) => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENT_API}/${aid}`);
    return data;
};
  
