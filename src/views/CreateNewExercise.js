import React from "react";

const center = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CreateNewExercise = () => {
  return (
    <div style={center} className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
              alt="Workflow"
            />
            <div className="grid grid-cols-10 gap-8">
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Exercise Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Url
                </label>
                <input
                  type="url"
                  name="street-address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Exercise Type
                </label>
                <select
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="date"
                  name="street-address"
                  autoComplete="street-address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
              
            </div>
            
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewExercise;
