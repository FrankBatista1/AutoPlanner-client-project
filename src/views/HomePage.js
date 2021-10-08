import { Link } from "react-router-dom";
import { Fragment, useContext, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const {loggedIn, user, fetchUserData} = useContext(AuthContext);
  useEffect(() => {
    if(loggedIn){
      fetchUserData()
    }  
  }, [fetchUserData])
  
  return (
    <div >
      <div>
        <div className="relative z-0 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="bg-transparent hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
                      alt="logo"/>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                {loggedIn ? <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8"><p className="font-medium text-yellow-500">Welcome </p> <p>{user.name} </p></div>: <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to="/signup" className="font-medium hover:text-yellow-500">
                    Sign up
                  </Link>
                  <Link to="login" className="font-medium text-yellow-600 hover:text-yellow-500">
                    Log in
                  </Link>
                </div> }
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
                        alt=""
                      />
                    </div>
                   <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                   {loggedIn ? <><p className="font-large text-yellow-500">Welcome </p><p>{user.name} </p></> : <><Link
                    to="/login"
                    className="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </Link><Link
                    to="/signup"
                    className="block w-full px-5 py-3 text-center font-medium bg-gray-50 hover:bg-gray-100"
                  >
                      Sign up
                    </Link></>}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Be your own</span><br/>
                <span className="block text-yellow-500 xl:inline">personal trainer</span><br/>
              </h1>
              <br/>
              <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
             Welcome to AutoPlanner the page where you <br/> can plan ahead your exercises, try creating a planner <br/>with your custom exercises, link them <br/>with your youtube videos, images, guides and more!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  {user.name ? <Link
                    to="/calendar"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                  >
                    Open your planner
                  </Link> :
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>}
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://res.cloudinary.com/duscflsvf/image/upload/v1633312403/shutterstock_1080117269_ghbeha.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default HomePage
