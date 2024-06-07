import React from "react";

const About = () => {
  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto px-4 pt-36 py-15 md:flex md:items-center md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            About Mero Pustak
          </h1>
          <p className="text-lg leading-relaxed">
            Mero Pustak is your one-stop shop for all your Nepali book needs. We
            are passionate about bringing you the best selection of Nepali
            books, from classics to contemporary bestsellers. Whether you're
            looking for a new novel to dive into or a textbook for your studies,
            we have something for everyone.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We believe that everyone should have access to books, regardless of
            their location or budget. That's why we offer competitive prices and
            fast shipping on all orders.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/bookcollection logo.png"
            alt="Mero Pustak - About Us"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission at Mero Pustak is to promote Nepali literature and make it
          accessible to a wider audience. We believe that books have the power
          to educate, entertain, and inspire, and we want to help people
          discover the joy of reading Nepali books.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl  text-orange-500 font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Customer Satisfaction</h3>
            <p className="text-baseleading-relaxed">
              We are committed to providing our customers with excellent service
              and a positive shopping experience.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Quality Books</h3>
            <p className="text-base  leading-relaxed">
              We offer a wide selection of high-quality Nepali books from
              reputable publishers.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Competitive Prices</h3>
            <p className="text-base leading-relaxed">
              We offer competitive prices on all of our books, making them
              affordable for everyone.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Fast Shipping</h3>
            <p className="text-base  leading-relaxed">
              We offer fast shipping on all orders to get your books to you
              quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
