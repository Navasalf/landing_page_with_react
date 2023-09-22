import React from "react";

export function Navbar() {
    return (
        <nav className="navbar bg-secondary" style={{ padding: "0 190px 0 210px" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-light">Start Bootstrap</a>
                <div className="d-flex">
                    <a className="navbar-brand text-light">Home</a>
                    <a className="navbar-brand">About</a>
                    <a className="navbar-brand">Services</a>
                    <a className="navbar-brand">Contact</a>
                </div>
            </div>
        </nav>
    )
}