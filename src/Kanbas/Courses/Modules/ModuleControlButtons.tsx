import { IoEllipsisVertical } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
        <span className="me-1" style={{ verticalAlign: "middle" }}>
        <GreenCheckmark />
        </span>
        <FiPlus className="me-1 fs-3" />
        <IoEllipsisVertical className="fs-4" />
    </div>
);}
