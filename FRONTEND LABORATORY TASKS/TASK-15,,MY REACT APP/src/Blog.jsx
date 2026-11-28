
import React from "react";

function Blog() {
    return (
        <div className="page">

            <h1>Our <span>Blog.</span></h1>

            <p>Welcome to our blog section.</p>

            <div className="blog-card">
                <h2>Blog 01 - React Basics</h2>
                <p>Learn the fundamentals of React.</p>
            </div>

            <div className="blog-card">
                <h2>Blog 02 - React Router</h2>
                <p>Learn how to navigate between pages.</p>
            </div>

        </div>
    );
}

export default Blog;
