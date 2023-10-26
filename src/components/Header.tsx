import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-muted border-b py-4">
      <nav className="container">
        <ul className="flex items-center gap-4">
          <li className="mr-4">
            <NavLink className="font-bold text-lg" to="/">
              MyCMS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg" : "font-norma text-lg"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg" : "font-norma text-lg"
              }
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
