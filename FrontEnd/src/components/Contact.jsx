import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 border rounded-md shadow-md "
    >
      <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium ">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="  dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          style={{ maxWidth: "calc(100% - 1rem)" }}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium ">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className=" dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          style={{ maxWidth: "calc(100% - 1rem)" }}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium ">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          className="  dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          style={{ maxWidth: "calc(100% - 1rem)" }}
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium  ">
          Message:
        </label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          className="  dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"
          style={{ maxWidth: "calc(100% - 1rem)" }}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600  text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
