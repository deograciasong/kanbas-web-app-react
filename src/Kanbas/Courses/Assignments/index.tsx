import AssignmentControl from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { VscNotebook } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <AssignmentControl /><br /><br /><br /><br />

            <ul id="wd-assignments-title" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-2" />
                        <MdOutlineArrowDropDown className="me-1 fs-2" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    
                    <ul className="wd-assignment-list list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <div className="me-3 d-flex align-items-start">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ fontSize: "19px" }}>
                                            <a className="wd-assignment-link"
                                                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </a>
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
                                        <HomeworkControlButtons />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

