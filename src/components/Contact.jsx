import React from "react";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSendBtn = (e) => {
    // console.log(name,email,message);
    e.preventDefault();
    // const formData={ name, email, message };
    if (!name || !email || !message) return alert("Fill all fields!");
    else {
      alert("Thank you! We received your message.");
    }
    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <section
      id="contact-section"
      className="w-[80%] flex flex-col  mx-auto bg-gray-100 py-12 px-6 hover:scale-105 transition-transform duration-300 mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-between  gap-3">
        {/* Left side: info */}
        <div className=" mt-5 w-full md:w-[50%] flex flex-col items-center text-2xl font-semibold gap-6">
          <p className="text-gray-700 mb-2">📍 123 Food Street, Ahmedabad</p>
          <p className="text-gray-700 mb-2  ">📞 +91 98765 43210</p>
          <p className="text-gray-700 mb-2">📧 support@foodify.in</p>
        </div>
        {/* Right side: form */}
        <form
          className="flex flex-col gap-3 w-full md:w-[50%] pl-10 pr-10"
          onSubmit={handleSendBtn}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            className="p-3 border rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            value={email}
            className="p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            rows="4"
            className="p-3 border rounded-lg"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-500 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
