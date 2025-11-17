import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  useDynamicTitle("Contact Us");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: You can later replace this with API or email logic
    // With this:
    Swal.fire({
      title: "✅ Message Sent!",
      text: "Your message has been delivered successfully.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#ef4444",
      background: "#f9fafb",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 text-white"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2b0000 100%)",
      }}
    >
      <Helmet>
        <meta
          name="description"
          content="If you have any questions, feel free to contact us."
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://innliv.com/contact-us" />
      </Helmet>
      {/* Header + Logo */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <Link
          to="/"
          className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
        >
          <img className="w-34" src={logo} alt="Logo" />
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-tight">
        Contact <span className="text-red-500">us</span>
      </h1>

      {/* Form Card */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-red-600/20">
        <p className="text-center text-gray-300 text-lg mb-8">
          Have a question, feedback, or partnership idea?
          <span className="text-red-500"> We’d love to hear from you.</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-gray-200"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400 resize-none"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-white hover:text-black transition-all duration-300 font-bold py-3 rounded-lg shadow-md border border-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
