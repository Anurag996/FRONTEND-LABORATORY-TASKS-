
import React, { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedData({
            name: name,
            email: email,
            message: message
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="form-box">

            <h1>Contact <span>Us.</span></h1>

            <p className="subtitle">
                We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit}>

                <label>Your Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Your Message</label>
                <textarea
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">
                    Submit Message →
                </button>

            </form>

            {submittedData && (
                <div className="result">

                    <h2>Submitted Details</h2>

                    <p><b>Name:</b> {submittedData.name}</p>
                    <p><b>Email:</b> {submittedData.email}</p>
                    <p><b>Message:</b> {submittedData.message}</p>

                </div>
            )}

        </div>
    );
}

export default Form;
