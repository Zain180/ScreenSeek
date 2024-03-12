import React from "react";
function Card({ title = "", imageUrl, releaseDate }) {
  return (
    <div className="md:w-[20vw] w-48 rounded-lg">
      <div className="w-full bg-gray-100 rounded  overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="w-full text-center">
        <h1 className="sm:text-lg text-sm font-semibold mt-1">{title}</h1>
        <p className="text-[2vw] sm:text-sm text-gray-400">{releaseDate}</p>
      </div>
    </div>
  );
}

export default Card;
