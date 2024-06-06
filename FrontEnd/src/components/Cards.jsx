import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure width={200} height={300}>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-sm md:text-xl">
              {item.name}
              <div className="badge badge-warning">{item.category}</div>
            </h2>
            <p className="hidden md:block">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="font-semibold text-base text-orange-600 md:text-3xl">
                ${item.price}
              </div>
              <div className="text-sm text-white cursor-pointer px-2 py-1 rounded-full border-[2px] bg-orange-500 hover:bg-orange-600  duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
