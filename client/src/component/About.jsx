import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        About Book CRUD App
      </h1>

      <p className="text-gray-600 leading-8 mb-5">
        Book CRUD App is a simple web application developed using the MERN
        Stack. It allows users to manage books efficiently by performing all
        CRUD (Create, Read, Update, Delete) operations.
      </p>

      <p className="text-gray-600 leading-8 mb-5">
        Users can add new books, edit existing book information, delete books,
        and view the complete list of books in an organized table.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>

          <ul className="space-y-2 text-gray-600 list-disc pl-5">
            <li>Add New Books</li>
            <li>Update Book Information</li>
            <li>Delete Books</li>
            <li>View All Books</li>
            <li>Responsive Interface</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technology Used</h2>

          <ul className="space-y-2 text-gray-600 list-disc pl-5">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;