import Logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center">
          <img src={Logo} alt="twigg-logo" />

          <ul className="flex items-center ml-10 gap-8 max-md:hidden">
            <li className="font-nunito">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "text-[#222]")}
              >
                Home
              </NavLink>
            </li>
            <li className="font-nunito">
              <NavLink
                to="/benefits"
                className={({ isActive }) => (isActive ? "text-primary" : "text-[#222]")}
              >
                Benefits
              </NavLink>
            </li>
            <li className="font-nunito">
              <NavLink
                to="/how-it-works"
                className={({ isActive }) => (isActive ? "text-primary" : "text-[#222]")}
              >
                How it works
              </NavLink>
            </li>
            <li className="font-nunito">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-primary" : "text-[#222]")}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 items-center max-md:hidden">
          <p>
            <Link to="/login">Log in</Link>
          </p>

          <p className="px-4 py-2 rounded-md bg-primary cursor-pointer text-white">
            <Link to="/register">Get Started</Link>
          </p>
        </div>
      </nav>
    </div>
  );
}
