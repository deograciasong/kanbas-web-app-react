import { FaChevronDown } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments-editor" className="container">
            {assignments
                .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => (
                    <div key={assignment._id}>
                        <div className="mb-3 justify-content-end align-items-center">
                            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                            <input id="wd-name" value={assignment.title} className="form-control" />
                        </div>

                        <div className="form-control mb-3 justify-content-end align-items-center" style={{ height: "auto", padding: "15px", fontSize: "16px" }}>
                            The assignment is <span style={{ color: 'red' }}>available online</span>. <br /><br />
                            {assignment.description}<br /><br />
                        </div>



                        {/* Points */}
                        < div className="row mb-3 justify-content-end align-items-center" >
                            <label htmlFor="wd-points" className="col-md-3 form-label text-end">Points</label>
                            <div className="col-md-6">
                                <input id="wd-points" value={assignment.points} className="form-control" />
                            </div>
                        </div>


                        {/* Assignment Group */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-group" className="col-md-3 form-label text-end">Assignment Group</label>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <select id="wd-group" className="form-control">
                                            <option selected value="Assignments">ASSIGNMENTS</option>
                                            <option value="QUIZZES">QUIZZES</option>
                                            <option value="EXAMS">EXAMS</option>
                                            <option value="PROJECT">PROJECT</option>
                                        </select>
                                        <span className="input-group-text bg-white">
                                            <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Display Grade as */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-display-grade-as" className="col-md-3 form-label text-end">Display Grade as</label>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <select id="wd-display-grade-as" className="form-control">
                                            <option selected value="PERCENTAGE">PERCENTAGE</option>
                                            <option value="DECIMAL">DECIMAL</option>
                                        </select>
                                        <span className="input-group-text bg-white">
                                            <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="container">
                            {/* Submission Type */}
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-submission-type" className="col-md-6 form-label text-end">Submission Type</label>
                                <div className="col-md-6">
                                    <div className="border p-3 rounded">
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <select id="wd-submission-type" className="form-control">
                                                    <option selected value="ONLINE">ONLINE</option>
                                                </select>
                                                <span className="input-group-text bg-white">
                                                    <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Online Entry Options */}
                                        <div className="row mb-6 justify-content-end align-items-center">
                                            <div className="col-md-12 offset-md-6">
                                                <label className="form-label fw-bold">Online Entry Options</label>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                                    <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Assign Section */}
                        <div className="container">
                            <div className="row justify-content-end align-items-center">
                                <label htmlFor="wd-assign-to" className="col-md-3 form-label text-end">Assign</label>
                                <div className="col-md-6">
                                    <div className="border p-3 rounded">
                                        <div className="mb-3">
                                            <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                                            <input id="wd-assign-to" value="Everyone" className="form-control" />
                                        </div>

                                        {/* Due Date */}
                                        <div className="mb-3">
                                            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                                            <div className="input-group">
                                                <input type="datetime-local" id="wd-due-date" value={assignment.due} className="form-control" />
                                                <span className="input-group-text">
                                                    <i className="bi bi-calendar"></i> {/* Bootstrap icon for calendar */}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Available From and Until */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                                                <div className="input-group">
                                                    <input type="datetime-local" id="wd-available-from" value={assignment.start} className="form-control" />
                                                    <span className="input-group-text">
                                                        <i className="bi bi-calendar"></i> {/* Bootstrap icon for calendar */}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                                                <div className="input-group">
                                                    <input type="datetime-local" id="wd-available-until" value={assignment.due} className="form-control" />
                                                    <span className="input-group-text">
                                                        <i className="bi bi-calendar"></i> {/* Bootstrap icon for calendar */}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Buttons */}
                        <div className="d-flex justify-content-end mt-3">
                            <Link to={`/Kanbas/courses/${cid}/Assignments`} className="btn btn-secondary me-2">
                                Cancel
                            </Link>
                            <Link to={`/Kanbas/courses/${cid}/Assignments`} className="btn btn-danger me-2">
                                Save
                            </Link>
                        </div>





                    </div >))}
        </div>
    );
}
