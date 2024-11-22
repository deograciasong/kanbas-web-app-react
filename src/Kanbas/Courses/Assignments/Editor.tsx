import { FaChevronDown } from "react-icons/fa";
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as db from "../../Database";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isEditing = !!db.assignments.find((a) => a._id === aid);

    const initialAssignment = db.assignments.find((a) => a._id === aid) || {
        _id: aid,
        title: "",
        description: "",
        points: "0",
        displayGradeAs: "PERCENTAGE",
        submissionType: "ONLINE",
        onlineEntryOptions: [],
        due: "",
        start: "",
        course: cid,
    }
    
    const [assignment, setAssignment] = useState(initialAssignment);

    const handleSave = async () => {
        if (isEditing) {
                const upadtedAssignment = await assignmentClient.updateAssignment(assignment);
                dispatch(updateAssignment({ ...upadtedAssignment, _id: aid }));
        } else {
            const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment);
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container">
            {/* Assignment Name */}
            <div className="mb-3 justify-content-end align-items-center">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input
                    id="wd-name"
                    name="title"
                    value={assignment.title}
                    className="form-control"
                    onChange={(e) => setAssignment((prev) => ({ ...prev, title: e.target.value }))}
                />
            </div>

            {/* Assignment Description */}
            <div className="form-control mb-3 justify-content-end align-items-center" style={{ height: "auto", padding: "15px", fontSize: "16px" }}>
                <span>The assignment is <span style={{ color: 'red' }}>available online</span>.</span>
                <br /><br />
                <textarea
                    name="description"
                    value={assignment.description}
                    className="form-control"
                    placeholder="Assignment Description"
                    onChange={(e) => setAssignment((prev) => ({ ...prev, description: e.target.value }))}
                />
            </div>

            {/* Points */}
            <div className="row mb-3 justify-content-end align-items-center">
                <label htmlFor="wd-points" className="col-md-3 form-label text-end">Points</label>
                <div className="col-md-6">
                    <input
                        id="wd-points"
                        name="points"
                        type="number"
                        value={assignment.points}
                        className="form-control"
                        onChange={(e) => setAssignment((prev) => ({ ...prev, points: e.target.value }))}
                    />
                </div>
            </div>

            {/* Assignment Group */}
            <div className="container">
                <div className="row mb-3 justify-content-end align-items-center">
                    <label htmlFor="wd-group" className="col-md-3 form-label text-end">Assignment Group</label>
                    <div className="col-md-6">
                        <div className="input-group">
                            <select
                                id="wd-group"
                                name="group"
                                value="Assignment"
                                className="form-control"
                                onChange={(e) => setAssignment((prev) => ({ ...prev, group: e.target.value }))}
                            >
                                <option value="Assignments">ASSIGNMENTS</option>
                                <option value="Quizzes">QUIZZES</option>
                                <option value="Exams">EXAMS</option>
                                <option value="Project">PROJECT</option>
                            </select>
                            <span className="input-group-text bg-white">
                                <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Due Date, Available From, Until */}
            <div className="container">
                <div className="row mb-3 justify-content-end align-items-center">
                    <label htmlFor="wd-due-date" className="col-md-3 form-label text-end">Due Date</label>
                    <div className="col-md-6">
                        <input
                            id="wd-due-date"
                            type="datetime-local"
                            name="due"
                            value={assignment.due}
                            className="form-control"
                            onChange={(e) => setAssignment((prev) => ({ ...prev, due: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="row mb-3 justify-content-end align-items-center">
                    <label htmlFor="wd-available-from" className="col-md-3 form-label text-end">Available from</label>
                    <div className="col-md-6">
                        <input
                            id="wd-available-from"
                            type="datetime-local"
                            name="start"
                            value={assignment.start}
                            className="form-control"
                            onChange={(e) => setAssignment((prev) => ({ ...prev, start: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="row mb-3 justify-content-end align-items-center">
                    <label htmlFor="wd-available-until" className="col-md-3 form-label text-end">Until</label>
                    <div className="col-md-6">
                        <input
                            id="wd-available-until"
                            type="datetime-local"
                            name="end"
                            value={assignment.due}
                            className="form-control"
                            onChange={(e) => setAssignment((prev) => ({ ...prev, end: e.target.value }))}
                        />
                    </div>
                </div>
            </div>


            {/* Save and Cancel Buttons */}
            <div className="d-flex justify-content-end mt-3">
                <Link to={`/Kanbas/courses/${cid}/Assignments`} className="btn btn-secondary me-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>
    );
}
