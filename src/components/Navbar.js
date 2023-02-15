import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar justify-between bg-tint-blue text-white p-2 fixed ">
      <div className="container ">
        <ul className="">
          <li className="site-title">
            <span>Finsweet</span>
          </li>
        </ul>

        <ul className="display-f">
          <li className="">
            <Link>Home</Link>
          </li>
          <li className="ml-2">
            <Link>About us</Link>
          </li>
          <li className="ml-2">
            <Link>Features</Link>
          </li>
          <li className="ml-2">
            <Link>Pricing</Link>
          </li>
          <li className="ml-2">
            <Link>FAQ</Link>
          </li>
          <li className="ml-2">
            <Link>Blog</Link>
          </li>
          <li className="ml-2">
            <Link>Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
