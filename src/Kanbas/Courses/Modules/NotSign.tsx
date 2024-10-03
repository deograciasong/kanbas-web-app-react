import { MdOutlineCancel } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
export default function NotSign() {
    return(
        <span className="me-1 position-relative">
            <MdOutlineCancel style={{ verticalAlign: "middle" }}
                className="text-black me-1 position-absolute fs-4" />
            <FaCircle className="text-white fs-5" />
        </span>
    );
}