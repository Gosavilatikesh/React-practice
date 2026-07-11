import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {

    let {name, value} = e.target
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration Form
        </h2>

        <form className="space-y-4">
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>

          <h1>This is name -{formData.name}</h1>
          <h1>This is email - {formData.email}</h1>
          <h1>This is password - {formData.password}</h1>
        </form>
      </div>
    </div>
  );
};

export default App;
