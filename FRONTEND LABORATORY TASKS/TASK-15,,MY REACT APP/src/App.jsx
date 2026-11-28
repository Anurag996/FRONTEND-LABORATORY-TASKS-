
import React from "react";

import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Blog from "./Blog.jsx";

import "./App.css";

function App() {

    return (
        <div className="container">

            <nav className="navbar">

                <h2 className="logo">
                    My<span>Website.</span>
                </h2>

                <div className="nav-links">

                    <NavLink to="/" end>Home</NavLink>

                    <NavLink to="/about">About</NavLink>

                    <NavLink to="/blog">Blog</NavLink>

                </div>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/blog" element={<Blog />} />

            </Routes>

            <footer>
                Designed with <span>♥</span> by Anurag
            </footer>

        </div>
    );
}

export default App;
