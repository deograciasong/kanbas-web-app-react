import AssignmentControl from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { VscNotebook } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Assignments() {
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

                {/* Assignment 1 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}>
                            <a className="wd-assignment-link" 
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A1
                            </a>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Sept 5 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Sept 19 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>

                {/* Assignment 2 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}>
                            <a className="wd-assignment-link" 
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A2
                            </a></div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Sept 19 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Oct 3 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>

                {/* Assignment 3 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}>
                                <a className="wd-assignment-link" 
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A3</a>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Oct 3 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Oct 17 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>

                {/* Assignment 4 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}><a className="wd-assignment-link" 
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A4
                            </a>
                        </div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Oct 17 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Oct 31 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>

                {/* Assignment 5 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}><a className="wd-assignment-link" 
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A5
                            </a>
                        </div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Oct 31 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Nov 14 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>

                {/* Assignment 6 */}
                <ul className="wd-assignment-list list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <div className="me-3 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "19px" }}><a className="wd-assignment-link" 
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A6
                            </a>
                        </div>
                            <div style={{ fontSize: "14px" }}>
                                <span style={{ color: "red" }}>Multiple Modules</span>
                                <span> | <strong>Not available until</strong> Nov 14 at 12:00am |</span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                | <strong>Due</strong> Nov 28 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="ms-auto">
                            <HomeworkControlButtons />
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
  );}
  
