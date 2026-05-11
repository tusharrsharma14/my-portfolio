import "./Contacts.css";
import { useState } from "react";

function Contact() {

  const [formData , setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {

    setFormData({
      ...formData,

      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {

  event.preventDefault();

  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.includes("@")) {
    newErrors.email = "Enter valid email";
  }

  if (formData.message.length < 10) {
    newErrors.message =
      "Message should be at least 10 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {

    alert("Message Submitted!");

    console.log(formData);
  }
}
  return (
    <section className="contact">

      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"

          value={formData.name}

          onChange={handleChange}
        />
            {errors.name && (
  <p className="error">
    {errors.name}
  </p>
)}

        <input
          type="email"
          name="email"
          placeholder="Your Email"

          value={formData.email}

          onChange={handleChange}
        />
        {errors.email && (
  <p className="error">
    {errors.email}
  </p>
)}
        <textarea
          name="message"
          placeholder="Your Message"

          rows="5"

          value={formData.message}

          onChange={handleChange}
        ></textarea>
        {errors.message && (
  <p className="error">
    {errors.message}
  </p>
)}
        

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;