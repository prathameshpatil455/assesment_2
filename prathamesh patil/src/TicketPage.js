import React from 'react';
import './App.css';

function TicketPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic goes here
    alert('New Task Created Successfully');
  };

  return (
    <div className="new-ticket-container">
      <h2>New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lead-source">Lead Source:</label>
        <select id="lead-source">
          <option value="web">Web</option>
          <option value="chat">Chat</option>
          <option value="call">Call</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="contact-number">Contact Number:</label>
        <input type="tel" id="contact-number" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" required />

        <label htmlFor="vehicle-make">Vehicle Make:</label>
        <input type="text" id="vehicle-make" required />

        <label htmlFor="vehicle-reg">Vehicle Registration Number:</label>
        <input type="text" id="vehicle-reg" pattern="[A-Z0-9]+" required />

        <label htmlFor="breakdown-issue">Breakdown Issue:</label>
        <input type="text" id="breakdown-issue" required />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" required />

        <label htmlFor="service-fee">Service Fee:</label>
        <input type="text" id="service-fee" />

        <label htmlFor="assistance-time">Assistance Time:</label>
        <input type="text" id="assistance-time" value={getCurrentTime()} readOnly />

        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function getCurrentTime() {
  const options = { hour: 'numeric', minute: 'numeric' };
  return new Date().toLocaleTimeString([], options);
}

export default TicketPage;
