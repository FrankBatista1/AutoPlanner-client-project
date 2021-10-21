import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  XIcon
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  return (
    <Popover className="relative bg-white">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
                alt="Workflow"
              />
            </Link>
          </div>
          <div >
          <h2 className="px-5 text-xl">{user.name}'s planner</h2>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/newexercise"
              className="py-2 px-4 border bg-yellow-500 border-yellow-500 text-sm font-medium rounded-md text-white  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              New exercise
            </Link>
            <button
              className="py-2 px-4 mx-4 border bg-yellow-500 border-yellow-500 text-sm font-medium rounded-md text-white  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={logOutUser}
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
                alt="Workflow"
              />
            </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
