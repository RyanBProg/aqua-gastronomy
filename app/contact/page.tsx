"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define form input types
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  // Use the useForm hook with type safety
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // Form submission handler
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // You can send this data to your API here
  };

  return (
    <section className="contentContainer my-40">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {/* Contact Form Header */}
        <h1 className="text-[6rem] text-white/20 font-bold leading-tight dark:text-white">
          Contact Us
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a question? Want to book a table or inquire about our services?
          Let us know.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: "Last Name is required" })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              {...register("message", { required: "Message is required" })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
