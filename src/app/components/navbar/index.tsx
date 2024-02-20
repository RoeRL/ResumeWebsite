import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white-0 sticky top-0">
        <div className="flex justify-center container mx-auto px-4 h-full">
          <div className="mr-10 ">
            <Logo/>
          </div>
          <div className="flex items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/discover">
                  <p>Discover</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;