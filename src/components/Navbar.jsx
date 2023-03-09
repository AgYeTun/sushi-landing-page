import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-body-color border-gray-200 py-0 rounded font-poppins max-w-screen-md mx-auto px-6 sticky top-0 z-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-2 md:px-0">
        <a href="#" className="flex items-center gap-1">
          <img
            src="../src/assets/img/logo.png"
            className="h-8"
            alt="Sushi Logo"
          />
          <span className="self-center font-lora text-xl font-semibold text-title whitespace-nowrap">
            Sushi
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-2xl text-title md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <i aria-hidden="true" class="ri-apps-2-line"></i>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 hover:text-primary md:p-0"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 hover:text-primary md:p-0">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className="block py-2 pl-3 pr-4 hover:text-primary md:p-0">
                Popular
              </a>
            </li>
            <li>
              <a
                href="#recently"
                className="block py-2 pl-3 pr-4 hover:text-primary md:p-0">
                Recently
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
