import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="absolute w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-10">
            <div className="flex h-32 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image src={logo} alt="Logo" />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a href="#about-us" className={styles.nav}>
                  About Us
                </a>
                <a href="#solutions" className={styles.nav}>
                  Solutions
                </a>
                <a href="#demo" className={styles.nav}>
                  Demo
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#about-us"
                className="block border-l-4 border-[#FF5722] bg-white py-2 pl-3 pr-4 text-base font-medium text-[#FF5722]"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#solutions"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Solutions
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#demo"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Demo
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
