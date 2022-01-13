import React from "react"
import "../style.css"
import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (<div className="navbar">
    <img src={logo} className="img" />
    <h1 className="text-color">ReactFacts</h1>
    <h4 className="sub-title">React Course - Project 1</h4>
    </div>)
}