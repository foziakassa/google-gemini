import React from 'react';
import './MM.css'

export default function MM() {
  return (
    <div className="text-center custom-margin-top">
      <h1 className="text-3xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:leading-none">
        <span className="block">preventive maintainance</span>
      </h1>
      <p className="max-w-sm mx-auto mt-1 font-normal text-gray-500 text- sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-2xl md:max-w-2xl">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, nam qui, ullam totam vel dolor voluptates voluptate quisquam cumque deserunt sed laudantium. Libero asperiores repellat in ducimus magni ullam velit!
      </p>
      <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6">
        <div className="rounded-full shadow">
          <button
            type="button"
            className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10"
          >
            Start with us
          </button>
        </div>
      </div>
    </div>
  );
}