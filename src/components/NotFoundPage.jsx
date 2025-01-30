import React from 'react';
import NotFound from "../assets/Not_found_image.jpg";

const NotFoundPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-4">
      <h1
        id="not-found-message"
        className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6"
      >
        No Notes Found!
      </h1>
      
      <img
        id="not-found-image"
        src={NotFound}
        alt="Create Your Content"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-xl shadow-lg"
      />
    </div>
  );
}

export default NotFoundPage;
