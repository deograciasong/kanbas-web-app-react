import { HiOutlinePlus } from "react-icons/hi";
import { TbSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { IoEllipsisVertical } from "react-icons/io5";
import mongoose from 'mongoose';


export default function QuizControl(
  { quizName, setQuizName, addQuiz }:
  { quizName: string; setQuizName: (title: string) => void; addQuiz: () => void; }) {
  const { cid } = useParams();
  const newQuizId = new mongoose.Types.ObjectId().toString();
  return (
    <div id="wd-quiz-controls" className="container d-flex justify-content-between align-items-center">
      <div className="position-relative" style={{ maxWidth: "300px" }}>
        <input id="wd-search-quiz" placeholder="Search..." type="text" className="form-control"
          style={{ height: "50px", paddingLeft: "40px", fontSize: "22px" }} />
        <TbSearch className="position-absolute"
          style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "22px", color: "#6c757d" }} />
      </div>

      <div>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${newQuizId}`}>
          <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-2">
            <HiOutlinePlus className="me-2" />Quiz</button>
        </Link>
        <button id="wd-quiz-toggle" className="btn btn-lg btn-secondary ">
            <IoEllipsisVertical />
        </button>
      </div>
    </div>
  );
}
