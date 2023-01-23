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
    fetch("https://formsubmit.co/ajax/soberly1@jhu.edu", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        message: contact.message,
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
  
  return (
    <div className="contactForm">
      
      <form target="_blank" action="https://formsubmit.co/logan.falzarano@gmail.com" method="POST">
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

      </form>
      
    </div>
  );
}
