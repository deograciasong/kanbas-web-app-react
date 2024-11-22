import AssignmentControl from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { VscNotebook } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAbortSignal } from "stream";
import { setAssignment, addAssignment, updateAssignment, deleteAssignment }
    from "./reducer";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const [assignmentName, setAssignmentName] = useState("");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const Assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignment(Assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = { name: assignmentName, course: cid };
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    const removeAssignment = async (aid: string) => {
        await assignmentClient.deleteAssignment(aid);
        dispatch(deleteAssignment(aid));
    };





    return (
        <div id="wd-assignments">
            {currentUser.role === "FACULTY" && (
                <div>
                    <AssignmentControl setAssignmentName={setAssignmentName} assignmentName={assignmentName}
                        addAssignment={createAssignmentForCourse} />
                    <br /><br /><br /><br />
                </div>)}

            <ul id="wd-assignments-title" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-2" />
                        <MdOutlineArrowDropDown className="me-1 fs-2" />
                        ASSIGNMENTS
                        {currentUser.role === "FACULTY" && (
                            <AssignmentControlButtons />)}
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">
                        {assignments
                            .map((assignment: any) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <div className="me-3 d-flex align-items-start">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ fontSize: "19px" }}>
                                            {currentUser.role === "FACULTY" ? (
                                                <a className="wd-assignment-link"
                                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                    {assignment.title}
                                                </a>
                                            ) : (
                                                <span>{assignment.title}</span>
                                            )}
                                        </div>
                                        <div style={{ fontSize: "14px" }}>
                                            <span style={{ color: "red" }}>Multiple Modules</span>
                                            <span> | <strong>Not available until</strong> {assignment.startWritten} |</span>
                                        </div>
                                        <div style={{ fontSize: "14px" }}>
                                            | <strong>Due</strong> {assignment.dueWritten}| {assignment.points} pts
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <HomeworkControlButtons assignmentId={assignment._id}
                                            assignmentName={assignment.title}
                                            deleteAssignment={(aid) => removeAssignment(aid)} />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

