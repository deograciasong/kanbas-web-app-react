import { Link } from "react-router-dom";
export default function Dashboard() {
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="wd-dashboard-course">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1234/Home">
                                <img src="/images/react.svg" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/4567/Home">
                                <img src="/images/breathing.jpg" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4567 breathing
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Breathing Techniques
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/1000/Home">
                                <img src="/images/present.png" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1000 come to class
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Being Present
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/2000/Home">
                                <img src="/images/color.png" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2000 art
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        what is color
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/3000/Home">
                                <img src="/images/eating.jpg" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3000 eating
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        pleasures of life
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/3000/Home">
                                <img src="/images/sleeping.png" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3000 sleeping
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        growing your mind
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/5000/Home">
                                <img src="/images/gym.jpg" width="100%" height={200}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5000 gym
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        macros
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}