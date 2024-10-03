import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Nicolas</span>{" "}
              <span className="wd-last-name">Jackson</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Enzo</span>{" "}
              <span className="wd-last-name">Fernandez</span></td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:31:45</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Robert</span>{" "}
              <span className="wd-last-name">Sanchez</span></td>
            <td className="wd-login-id">001234564S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-1-01</td>
            <td className="wd-total-activity">4:21:03</td> </tr>


            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Cole</span>{" "}
              <span className="wd-last-name">Palmer</span></td>
            <td className="wd-login-id">001234569S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">3:23:33</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Reese</span>{" "}
              <span className="wd-last-name">James</span></td>
            <td className="wd-login-id">001233469S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-9-21</td>
            <td className="wd-total-activity">9:22:33</td> </tr>
            
            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Levi</span>{" "}
              <span className="wd-last-name">Colwill</span></td>
            <td className="wd-login-id">001233429S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-8-21</td>
            <td className="wd-total-activity">6:22:33</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Wesley</span>{" "}
              <span className="wd-last-name">Fofana</span></td>
            <td className="wd-login-id">001433869S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-9-30</td>
            <td className="wd-total-activity">3:01:33</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Noni</span>{" "}
              <span className="wd-last-name">Madueke</span></td>
            <td className="wd-login-id">001434969S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-4-21</td>
            <td className="wd-total-activity">7:55:33</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Enzo</span>{" "}
              <span className="wd-last-name">Maresca</span></td>
            <td className="wd-login-id">001434969S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TEACHER</td>
            <td className="wd-last-activity">2024-10-01</td>
            <td className="wd-total-activity">7:55:33</td> </tr>
        </tbody>
      </table>
    </div> 
    );
}