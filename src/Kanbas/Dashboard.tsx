import { Link } from "react-router-dom";
export default function Dashboard() {
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.ico" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/1234/Home">CS1234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/breathing.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/4567/Home">CS4567 breathing</Link>
                        <p className="wd-dashboard-course-title">Breathing Techniques</p>
                        <Link to="/Kanbas/Courses/4567/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/present.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/1000/Home">CS1000 come to class</Link>
                        <p className="wd-dashboard-course-title">Being Present</p>
                        <Link to="/Kanbas/Courses/1000/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/color.webp" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/2000/Home">CS2000 art</Link>
                        <p className="wd-dashboard-course-title">What is color</p>
                        <Link to="/Kanbas/Courses/2000/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/eating.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/3000/Home">CS3000 eating</Link>
                        <p className="wd-dashboard-course-title">Pleasures of Life</p>
                        <Link to="/Kanbas/Courses/3000/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/sleeping.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/4000/Home">CS4000 Sleeping</Link>
                        <p className="wd-dashboard-course-title">growing your mind</p>
                        <Link to="/Kanbas/Courses/4000/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/gym.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/5000/Home">CS5000 gym</Link>
                        <p className="wd-dashboard-course-title">Macros</p>
                        <Link to="/Kanbas/Courses/5000/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}