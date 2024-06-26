import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container pl-8 p-24 pb-5 ">
          <div className="flex">
            <p className="font-bold text-base md:text-5xl md:pl-32">
              Welcome to,
            </p>
            <p className=" text-orange-500 font-bold text-base md:text-5xl pl-2">
              Contact Us
            </p>
          </div>
          <div className=" font-light text-sm  py-2 md:pl-32">
            Questions,bug-report,feed back we are here for it all
          </div>
        </div>
        <div className="md:flex mx-5 justify-evenly ">
          <div className="m-5">
            <img
              src="\customer.png"
              className=" w-[350px] h-[380px] md:w-[420px] md:h-[460px] md:ml-"
              alt="customercare pic"
            />
          </div>
          <div>
            <Contact className=" min-h-screen flex items-center justify-center" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ContactUs;
