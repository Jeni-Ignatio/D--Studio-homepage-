"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields!");
      setSuccess(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address!");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-gray-500 px-6 md:px-16 py-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-7">
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            Get in touch
          </p>

          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
            Let's create
            <br />
            something
            <br />
            <span className="italic font-normal">remarkable.</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Tell us what you are building next. Share your timeline, goals, or
            product brief. Let's turn your ideas into something extraordinary.
          </p>

          <div className="border-t border-gray-300 pt-6 mt-4">
            <p className="text-sm text-gray-500">OUR APPROACH</p>
            <p className="text-white font-serif">contact:1234567890</p>
            <p className="text-white font-serif">email:dstudio@gmail.com</p>
            <p className="text-lg font-medium mt-2">
              Thoughtful design. Meaningful experiences.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-semibold font-serif mb-2">
            Start a conversation
          </h2>

          <p className="text-gray-500 mb-8">
            Fill out the form and tell us about your project.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-black transition"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-black transition"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="message">
                Project Details
              </label>

              <textarea
                id="message"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-black transition resize-none"
                rows="5"
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02]"
              type="submit"
            >
              Send Message →
            </button>

            {/* Error and Success */}
            {error && (
              <p className="text-red-600 font-medium text-sm">{error}</p>
            )}

            {success && (
              <p className="text-green-700 font-medium text-sm">
                Message submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
