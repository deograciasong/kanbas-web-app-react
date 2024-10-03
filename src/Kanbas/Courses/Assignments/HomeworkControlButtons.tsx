import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function HomeworkControlButtons() {
  return (
    <div className="float-end">
        <span className="me-1" style={{ verticalAlign: "middle" }}>
        <GreenCheckmark />
        </span>
        <IoEllipsisVertical className="fs-4" />
    </div>
);}
