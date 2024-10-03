import { IoEllipsisVertical } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        <span style={{ display: "inline-block", padding: "10px 20px",
        border: "2px solid grey", borderRadius: "25px",
        textAlign: "center", fontSize: "16px", lineHeight: "1",
        width: "135px", height: "40px", alignItems: "center",
        justifyContent: "center",color: "grey"}}>
        40% of Total
        </span>
        <FiPlus className="me-1 ms-2 fs-3" />
        <IoEllipsisVertical className="fs-4" />
    </div>
);}
