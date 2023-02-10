import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navdiv">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold text-white px-3 py-2" to="/">Learn With Sanjeet</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-4">
                            <li className="nav-item fw-bold px-3 py-2">
                                <Link className="nav-link text-white" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item dropdown fw-bold px-3 py-2">
                                <Link className="nav-link dropdown-toggle text-white" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu fw-bold text-white">
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">Manpower Calculator</Link></li>
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">MMR Calculator</Link></li>
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/services/employeedetails">Employee Details</Link></li>
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">Detailed Report</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown fw-bold px-3 py-2">
                                <Link className="nav-link dropdown-toggle text-white" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Extras
                                </Link>
                                <ul className="dropdown-menu fw-bold">
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">Coming Soon</Link></li>
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">Coming Soon</Link></li>
                                    <li><Link className="dropdown-item fw-semibold text-white" to="/">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item fw-bold px-3 py-2">
                                <Link className="nav-link text-white" aria-current="page" to="/contactus">Contact Us</Link>
                            </li>
                            <li className="nav-item fw-bold px-3 py-2">
                                <Link className="nav-link text-white" aria-current="page" to="/aboutdev">About Dev</Link>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary fw-bold px-4">Get Started</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navigation
