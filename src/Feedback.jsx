
import React, { useEffect, useState } from "react";
import { getFeedback, saveFeedback } from "./services/feedback";
import "./Feedback.css";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setFeedbackList(getFeedback());
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      alert("Please enter your name and feedback.");
      return;
    }

    const updatedFeedback = saveFeedback({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    setFeedbackList(updatedFeedback);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Thank you for your lovely wishes! ❤️");
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">

        <div className="feedback-heading">
          <span>♥ A LITTLE MESSAGE FROM YOU ♥</span>
          <h2>Share Your Wishes</h2>
          <p>
            Your love and blessings will make our special day
            even more memorable.
          </p>
        </div>

        <div className="feedback-card">

          <form onSubmit={handleSubmit}>

            <div className="feedback-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            

            <div className="feedback-field">
              <label>How are you related to the groom?</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="feedback-field">
              <label>Your Message *</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your wishes for Deepak and Prity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="feedback-submit">
              Send Your Wishes ♥
            </button>

          </form>
        </div>

        <div className="feedback-comments">
          <h3>Messages & Blessings</h3>

          {feedbackList.length === 0 ? (
            <p className="no-feedback">
              Be the first to share your wishes! ❤️
            </p>
          ) : (
            feedbackList.map((item) => (
              <div className="feedback-comment" key={item.id}>
                <div className="comment-top">
                  <strong>{item.name}</strong>
                  <span>
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </div>

                {item.subject && (
                  <h4>{item.subject}</h4>
                )}

                <p>{item.message}</p>
              </div>
            ))
          )}
        </div>

        <p className="feedback-footer">
          Made with love for Deepak & Prity ❤️
        </p>

      </div>
    </section>
  );
}

export default Feedback;
