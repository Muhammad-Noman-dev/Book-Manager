import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-8">
        Have any questions or suggestions? Feel free to contact us using the
        information below.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-5">
        <div>
          <h2 className="font-semibold text-lg">Email</h2>
          <p className="text-gray-600">nomi.qasim7788@gmail.com</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Phone</h2>
          <p className="text-gray-600">+92 349 7168272</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Address</h2>
          <p className="text-gray-600">
            Faisalabad, Punjab, Pakistan
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-5">
          Send a Message
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;