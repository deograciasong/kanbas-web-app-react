import { HiOutlinePlus } from "react-icons/hi";
import { TbSearch } from "react-icons/tb";

export default function AssignmentControl() {
  return (
    <div id="wd-assignment-controls" className="container d-flex justify-content-between align-items-center">
      <div className="position-relative" style={{ maxWidth: "300px" }}>
        <input id="wd-search-assignment" placeholder="Search..." type="text" className="form-control"
          style={{ height: "50px", paddingLeft: "40px", fontSize: "22px" }}/>
        <TbSearch className="position-absolute" 
        style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "22px", color: "#6c757d" }}/>
      </div>

      <div>
        <button id="wd-view-progress" className="btn btn-secondary btn-lg me-2">
          <HiOutlinePlus className="me-2" />Group</button>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
          <HiOutlinePlus className="me-2" />Assignment</button>

      </div>
    </div>
  );
}
