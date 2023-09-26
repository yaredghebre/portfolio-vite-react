import React from "react";
import { useState } from "react";

const Contact = () => {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSendClick = () => {
    const formData = new FormData(document.getElementById("contactForm"));
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      document.getElementById("contactForm").submit();
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4"
    >
      <form
        id="contactForm"
        method="POST"
        action="https://getform.io/f/26b22da2-c23e-45c5-b471-871a063c829e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#29A38E] sm:text-center text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">// Submit the form below</p>
        </div>
        <input className="p-2" type="text" placeholder="Name" name="name" />
        {errors.name && <div className="text-red-500">{errors.name}</div>}

        <input
          className="my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}

        <textarea
          className="p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        {errors.message && <div className="text-red-500">{errors.message}</div>}

        <button
          type="button"
          onClick={handleSendClick}
          className="text-white border-2 hover:bg-[#29A38E] hover:border-[#29A38E] duration-300 rounded px-10 py-3 my-8 mx-auto flex items-center"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
