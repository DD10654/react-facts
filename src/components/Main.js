import React from "react"
import "../style.css"

export default function Main() {
    return (<div className="main">
    <h1 className="main--title">Fun Facts About React</h1>
    <ul className="main--list">
        <li className="main--list-item">Was First Relased in 2013</li><br />
        <li className="main--list-item">Was Originally Created By Jordan Walke</li><br />
        <li className="main--list-item">Has well over 100k stars on Github</li><br />
        <li className="main--list-item">Is Maintained By Facebook</li><br />
        <li className="main--list-item">Powers of thousands of Enterprise apps, including mobile apps</li>
    </ul>
    </div>)
}