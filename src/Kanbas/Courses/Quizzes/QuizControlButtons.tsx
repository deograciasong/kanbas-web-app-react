import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import NotSign from "../Modules/NotSign";
import { useParams } from "react-router";

export default function QuizControlButtons(
    { quizId, quizName, deleteQuiz }: {
        quizId: string; quizName: string; deleteQuiz: (quizId: string) => void;
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const modalId = `wd-delete-assignment-dialog-${quizId}`;
    const { cid } = useParams();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete the quiz "${quizName}"?`)) {
            deleteQuiz(quizId);
        }
    };

    return (
        <div className="float-end">
            <span className="me-3" style={{ verticalAlign: "middle", fontSize: "30px", position: "relative", top: "10px" }}>
                <GreenCheckmark />
            </span>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-quiz-toggle" className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <IoEllipsisVertical />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-edit" className="dropdown-item" href={`#/Kanbas/Courses/${cid}/Quizzes/${quizId}`}>
                            Edit</a>
                    </li>
                    <li>
                        <a id="wd-delete" className="dropdown-item" onClick={handleDelete}>
                            Delete</a>
                    </li>
                    <li>
                        <a id="wd-publish" className="dropdown-item" href="#">
                            Publish</a>
                    </li>
                    <li>
                        <a id="wd-copy" className="dropdown-item" href="#">
                            Copy</a>
                    </li>
                    <li>
                        <a id="wd-sort" className="dropdown-item" href="#">
                            Sort</a>
                    </li>
                </ul>
            </div>
            {/* </div>
      {currentUser.role === "FACULTY" && (
        <button className="btn btn-lg btn-white me-1" id="wd-delete-assignment-btn"
          data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
          <IoEllipsisVertical className="text-danger me-2 mb-1" />
        </button>
      )} */}
            {/* <span className="me-1" style={{ verticalAlign: "middle" }}>
        <GreenCheckmark />
      </span>
      <IoEllipsisVertical className="fs-4" />
      <DeleteConfirmation assignmentId={assignmentId} assignmentName={assignmentName}
        deleteAssignment={() => {
          deleteAssignment(assignmentId)
        }}
        modalId={modalId} /> */}
        </div>
    );
}
