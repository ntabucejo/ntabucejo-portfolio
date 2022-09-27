import { Menu } from "@headlessui/react";
import React from "react";
import Logo from "./logo";
import Path from "./path";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-8 justify-between landscape:justify-start ">
      <Logo />
      <div className="landscape:hidden z-10">
        <Menu>
          <Menu.Button>
            <Bars4Icon className="w-6 h-6" />
          </Menu.Button>
          <Menu.Items className="flex flex-col absolute rounded bg-zinc-800 inset-0 p-8 gap-4">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"} p-2 rounded`}
                  href="/">
                  Home
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <ul className="landscape:flex gap-4 hidden">
        <Path text="Home" to="/" />
      </ul>
    </nav>
  );
};

export default Navbar;
