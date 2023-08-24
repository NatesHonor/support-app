import React from 'react';

function MessageForm() {
  return (
    <div className="content">
      <h2>Send a Message</h2>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default MessageForm;
