/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Organize Your Life with TodoApp
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Keep track of tasks, set reminders, and stay productive with our
            intuitive Todo list app.
          </p>
          <div className="flex justify-center gap-x-4">
            <Link
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
              href="/tasks"
            >
              Get Started
            </Link>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-gray-400 text-center">
                Easily add, edit, and organize your tasks.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Reminders</h3>
              <p className="text-gray-400 text-center">
                Set reminders to stay on top of your tasks.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Cross-platform Sync
              </h3>
              <p className="text-gray-400 text-center">
                Access your tasks anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                "TodoApp has revolutionized how I manage my tasks. It's simple,
                intuitive, and keeps me organized."
              </p>
              <p className="text-gray-300 font-semibold">- John Doe</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                "I've tried many todo list apps, but TodoApp stands out for its
                ease of use and powerful features."
              </p>
              <p className="text-gray-300 font-semibold">- Jane Smith</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                "Thanks to TodoApp, I've become more productive and focused.
                Highly recommended!"
              </p>
              <p className="text-gray-300 font-semibold">- David Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of users who have transformed their productivity with
            TodoApp!
          </p>
          <Link
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
            href="/tasks"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
