import { HiOutlinePlus } from "react-icons/hi";
import { TbSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import AssignmentEditor from "./Editor";

export default function AssignmentControl(
  { assignmentName, setAssignmentName, addAssignment }:
  { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {
  const { cid } = useParams();
  const newAssignmentId = new Date().getTime().toString();
  return (
    <div id="wd-assignment-controls" className="container d-flex justify-content-between align-items-center">
      <div className="position-relative" style={{ maxWidth: "300px" }}>
        <input id="wd-search-assignment" placeholder="Search..." type="text" className="form-control"
          style={{ height: "50px", paddingLeft: "40px", fontSize: "22px" }} />
        <TbSearch className="position-absolute"
          style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "22px", color: "#6c757d" }} />
      </div>

      <div>
        <button id="wd-view-progress" className="btn btn-secondary btn-lg me-2">
          <HiOutlinePlus className="me-2" />Group</button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`}>
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
            <HiOutlinePlus className="me-2" />Assignment</button>
        </Link>
      </div>
    </div>
  );
}
