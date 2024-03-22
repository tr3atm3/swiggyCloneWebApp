import React, { useRef } from "react";

const Contact = () => {
  const name = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value &&
      phoneNumber.current.value &&
      email.current.value
    ) {
      alert("We will get back to you soon");
      name.current.value = null;
      phoneNumber.current.value = null;
      email.current.value = null;
    } else {
      alert("Enter Valid Details");
    }
  };
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>

      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={name} />
        </div>
        <div>
          <label htmlFor="number">Phone No.</label>
          <input type="number" id="number" ref={phoneNumber} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={email} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-footer">
        <h2>
          Contact us At:{" "}
          <a href={`mailto:"tttushar.789@gmail.com"`}>tttushar.789@gmail.com</a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
