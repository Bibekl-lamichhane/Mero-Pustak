import React from "react";

const OurStory = () => {
  return (
    <div className=" mx-3 flex justify-around items-center p-2  md:p-10">
      <div className=" w-[40rem] h-[25rem]  rounded-3xl">
        <img
          src="/White Illustrative Creative Literature Project Presentation.jpg"
          alt="our program"
        />
      </div>
      <div className="w-[40rem] h-[25rem]  ">
        <div className=" flex-col m-4 md:mt-20">
          <div className="text-xl text font-extrabold font-sans md:text-3xl">
            Our Activities
          </div>
          <div className=" items-center text-sm md:text-xl">
            We're excited to announce that Mero Pustak is donating books to
            local orphanages, spreading the joy of reading to children in need.
            Let's inspire young minds and create brighter futures together!
          </div>
          <button className="bg-orange-400 px-4 py-2 mt-4 rounded-2xl text-white   font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500 text-sm md:text-2xl">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
