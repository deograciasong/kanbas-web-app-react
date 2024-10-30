import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import DeleteConfirmation from "./DeleteConfirmation";

export default function HomeworkControlButtons(
  { assignmentId, assignmentName, deleteAssignment }: {
    assignmentId: string; assignmentName: string; deleteAssignment: (assignmentId: string) => void;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const modalId = `wd-delete-assignment-dialog-${assignmentId}`;
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <button className="btn btn-lg btn-white me-1" id="wd-delete-assignment-btn"
          data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
          <FaTrash className="text-danger me-2 mb-1" />
        </button>
      )}
      <span className="me-1" style={{ verticalAlign: "middle" }}>
        <GreenCheckmark />
      </span>
      <IoEllipsisVertical className="fs-4" />
      <DeleteConfirmation assignmentId={assignmentId} assignmentName={assignmentName}
        deleteAssignment={() => {
          deleteAssignment(assignmentId)
        }}
        modalId={modalId} />
    </div>
  );
}
