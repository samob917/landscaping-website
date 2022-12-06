import React from "react";

export default function Contact() {
  const [contact, setContact] = React.useState({
    email: "",
    name: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((oldContact) => ({
      ...oldContact,
      [name]: value,
    }));
  }

  function handleSubmit() {
    console.log(contact);
  }
  return (
    <div className="contactForm">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form--input"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="form--input"
        value={contact.name}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="message"
        placeholder="Type Message Here"
        className="form--input"
        value={contact.message}
        onChange={handleChange}
      />
      <button className="form--button" onClick={handleSubmit}>
        {" "}
        Send Message{" "}
      </button>
    </div>
  );
}
