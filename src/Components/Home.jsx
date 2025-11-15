import React from "react";
import { AppContext } from "../Provider/createContext";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-blue-50 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <img
            src="/Selection.png"
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Book a Doctor Appointment in Minutes
            </h1>
            <p className="py-6">
              Find and schedule appointments with top doctors near you, easily
              and conveniently. Your health journey simplified.
            </p>
            <NavLink
              className="btn btn-primary bg-blue-600 border-none"
              to={"/doctors"}>
              Find Doctors
            </NavLink>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      {/* <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              🔧 Speciality
            </label>
            <input
              type="text"
              placeholder="Select speciality"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">📍 City</label>
            <input
              type="text"
              placeholder="Select city"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">📅 Date</label>
            <input type="date" className="input input-bordered w-full" />
          </div>
          <button className="btn btn-primary bg-blue-600 border-none">
            🔍 Search
          </button>
        </div>
      </div> */}

      {/* Explore Medical Specialties */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Explore Medical Specialties
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover a wide range of medical specialties and find the right
            doctor for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* General Practice */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-blue-200">
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l4-4a4 4 0 00-5.656-5.656l1.414-1.414"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">General Practice</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive care for common health concerns.
              </p>
            </div>
            {/* Smile Care */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-blue-200">
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Smile Care</h3>
              <p className="text-gray-600 text-sm">
                Expert dental services for a healthy smile.
              </p>
            </div>
            {/* Pediatrics */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-blue-200">
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Pediatrics</h3>
              <p className="text-gray-600 text-sm">
                Specialized care for infants, children, and adolescents.
              </p>
            </div>
            {/* Cardiology */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-blue-200">
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Cardiology</h3>
              <p className="text-gray-600 text-sm">
                Heart health management and preventative care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-2">⭐</div>
            <h3 className="text-3xl font-bold">4.9/5</h3>
            <p className="text-gray-600">Average Patient Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="text-gray-600">Verified Doctors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📞</div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-600">Online Support</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">🏥 DocConnect</h4>
            <p className="text-gray-400">
              Simplifying healthcare access for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Specialities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Telehealth
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>© 2025 DocConnect. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
