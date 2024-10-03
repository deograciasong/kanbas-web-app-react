import React from "react";
import { Link } from "react-router-dom";
export default function Signup () {
    return (
        <div id="wd-signup-screen">
            <h3> Sign Up</h3>
            <input placeholder="username" className="form-control" />
            <input placeholder="password" type="password" className="form-control"/>
            <input placeholder="verify password" className="form-control" type="password" />
            <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">Sign up </Link>
            <Link to="/Kanbas/Account/Signin" > Sign in </Link>
        </div>
    )
}