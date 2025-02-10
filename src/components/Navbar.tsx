import { PATH_LOGIN } from "@/App";
import { User } from "@/types/type";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isAuthenticated?: boolean;
  user?: User | null;
}

export const NavBar = ({ isAuthenticated, user }: NavbarProps) => {
  return (
    <>
      <nav className="border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse pr-8"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="RiangPlay Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                RiangPlay
              </span>
            </a>

            <div
              className="items-center hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    All Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Surprise Deal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-3">
                <Link to="/cart" className="relative">
                  <ShoppingCart className="text-black w-8 h-8" />
                  {user && (
                    <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {user.totalCart ?? 0}
                    </span>
                  )}
                </Link>
                {user.name ? (
                  <Link to="/profile">
                    <div className="bg-black w-8 h-8 rounded-full border-2 flex justify-center items-center ml-4">
                      <p className="text-white">{user.name[0]}</p>
                    </div>
                  </Link>
                ) : (
                  <p className="text-blue-700 font-semibold pl-4">
                    Welcome, User
                  </p>
                )}
              </div>
            ) : (
              <div>
                <div>
                  <Link
                    to={PATH_LOGIN}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
