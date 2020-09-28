import React from 'react';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
import "./events.css";

export default function EveningEvents() {
    return (
        <div>
            <div><NavBar/></div>
            <div>
                <h1>Upcoming Evening Events</h1>
            </div>

            <div><Footer/></div>
        </div>
    )
}
