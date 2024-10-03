import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </a>

      <NavLink to="/Kanbas/Account" id="wd-account-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${isActive ? 'bg-white text-danger' : 'text-white'}`
        }>
        <FaRegCircleUser className="fs-1" /><br />Account
      </NavLink>

      <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
        }>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard
      </NavLink>

      <NavLink to="/Kanbas/Courses" id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
        }>
        <LiaBookSolid className="fs-1 text-danger" /><br />Courses
      </NavLink>

      <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
        }>
        <IoCalendarOutline className="fs-1 text-danger" /><br />Calendar
      </NavLink>

      <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
        }>
        <FaInbox className="fs-1 text-danger" /><br />Inbox
      </NavLink>

      <NavLink to="/Labs" id="wd-labs-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
        }>
        <LiaCogSolid className="fs-1 text-danger" /><br />Labs
      </NavLink>
    </div>
  );
}

