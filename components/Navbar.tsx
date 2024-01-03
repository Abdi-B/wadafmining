import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

import { LogoIcon } from "../assets";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="flex justify-center items-center ml-2"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-brown-500"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div
          className="flex justify-center items-center ml-2"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-brown-900"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <nav className="bg-white px-2 sm:px-4 py-3 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-t-4 border-brown-200 dark:border-gray-600 h-25 shadow-md dark:shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <Link className="flex items-center" href="/#Hero" scroll={false}>
            <Image
              src={LogoIcon}
              alt="Wadaf Mining Logo"
              className="mr-2  bg-white rounded-xl"
              width={150}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:block md:w-auto text-white bg-eternity-700 hover:bg-eternity-800 focus:ring-4 focus:outline-none focus:ring-eternity-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-eternity-600 dark:hover:bg-eternity-700 dark:focus:ring-eternity-600"
          >
            <Link href="/#Contact" scroll={false}>
              Contact Us
            </Link>
          </button>
          {renderThemeChanger()}
          <Menu as="div" className="relative inline-block text-left ml-1">
            <div>
              <Menu.Button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                {/* <span className="sr-only">Open main menu</span> */}
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button 
                        className={`${
                          active ? "bg-brown-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>                                                
                        <Link href="/#Hero" scroll={false}>Home</Link>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-brown-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Link href="/#Services" scroll={false}>
                          Services
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-brown-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Link href="/#Products" 
                            scroll={false}>
                          Products
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-brown-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Link href="/about" scroll={false}>
                          About Us
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-brown-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Link href="/#Contact" scroll={false}>
                          Contact Us
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/#Hero"
                className={
                  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:text-gol md:hover:bg-transparent md:border-0 md:hover:text-brown-300   md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" +
                  (asPath === "/#Hero"
                    ? " bg-blue-700 text-white md:bg-transparent md:text-brown-300 md:underline  md:dark:text-white  dark:bg-blue-600 md:dark:bg-transparent"
                    : "")
                }
                scroll={false}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#Services"
                scroll={false}
                className={
                  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brown-300 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" +
                  (asPath === "/#Services"
                    ? " bg-blue-700 text-white md:bg-transparent md:text-brown-300 md:underline  md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                    : "")
                }
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#Products"
                scroll={false}
                className={
                  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brown-300 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" +
                  (asPath === "/#Products"
                    ? " bg-blue-700 text-white md:bg-transparent md:text-brown-300 md:underline md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                    : "")
                }
              >
                Products
              </Link>
            </li>
            
            <li>
              <Link
                href="/about"
                scroll={false}
                className={
                  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brown-300 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" +
                  (asPath === "/about"
                    ? " bg-blue-700 text-white md:bg-transparent md:text-brown-300 md:underline md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                    : "")
                }
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
