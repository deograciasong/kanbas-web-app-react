export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>

        
        <ul id="wd-assignment-list">

            {/* Assignment 1 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
                </a>
                <p>Multiple Modules | <strong>Not available until Sept 5 at 12:00am</strong> | Due Sept 19 at 11:59pm | 100 pts</p>
            </li>
          

            {/* Assignment 2 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/234">
                A2 - CSS + BOOTSTRAP
                </a>
                <p>Multiple Modules | <strong>Not available until Sept 19 at 12:00am</strong> | Due Oct 3 at 11:59pm | 100 pts</p>
            </li>


            {/* Assignment 3 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/345">
                A3 - JAVASCRIPT + REACT
                </a>
                <p>Multiple Modules | <strong>Not available until Oct 3 at 12:00am</strong> | Due Oct 17 at 11:59pm | 100 pts</p>
            </li>

            {/* Assignment 4 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/456">
                A4 - STATE & REDUX
                </a>
                <p>Multiple Modules | <strong>Not available until Oct 17 at 12:00am</strong> | Due OCT 31 at 11:59pm | 100 pts</p>
            </li>


            {/* Assignment 5 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/567">
                A5 - NODE + SESSION
                </a>
                <p>Multiple Modules | <strong>Not available until Nov 1 at 12:00am</strong> | Due Nov 14 at 11:59pm | 100 pts</p>
            </li>

            
            {/* Assignment 6 */}
            <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/678">
                A6 - MONGODB + MONGOOSE
                </a>
                <p>Multiple Modules | <strong>Not available until Nov 14 at 12:00am</strong> | Due Nov 28 at 11:59pm | 100 pts</p>
            </li>


        </ul>
      </div>
  );}
  
