import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 ">
          <div className="space-y-8 ">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to Mero Pustak{" "}
              <span className="text-orange-500">Your Digital Library</span>
            </h1>

            <p className="text-sm md:text-xl">
              Discover a world of limitless stories and knowledge. Dive into our
              vast collection of ebooks and find your next great read today
            </p>
          </div>
          <button className="btn mt-6 text-white bg-orange-500 hover:bg-orange-600 border rounded-3xl ml-1/2 md:ml-0">
            Learn More
          </button>
        </div>
        <div className=" order-1 w-full mt-20  ml-40 md:w-1/2">
          <img
            src="/women pic.png"
            className=" w-[350px] h-[380px] md:w-[420px] md:h-[460px] md:ml-"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
