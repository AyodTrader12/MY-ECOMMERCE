import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nav = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/about us", title: "About us" },
    { id: 1, path: "/home", title: "Shop" },
    { id: 1, path: "/home", title: "pages" },
    { id: 1, path: "/home", title: "Contact us" },
  ];
  return (
    <div>
      <div className="bg-[#720917] w-full h-[40px] flex items-center justify-center">
        <div className="flex gap-1">
          <p className="text-white">Free shipping for orders over $200.</p>
          <p className="text-white underline">view offer </p>
        </div>
      </div>
      <div className="bg-black w-full h-[90px] flex justify-center">
        <div className="w-[80%] h-full  flex justify-between">
          <div className="w-[25%] h-full flex  items-center">
            <p className="text-[20px] text-white">
              Looks<span>Good</span>
            </p>
          </div>
          <div className="w-[50%] h-full flex items-center gap-5 text-white">
            {nav.map((el) => (
              <Link to={el.path}>{el.title}</Link>
            ))}
          </div>
          <div className="w-[30%] h- flex gap-5 items-center">
            <p className="font-semibold hover:text-red-600 transition-all duration-300 cursor-pointer text-white uppercase">
              Sign up
            </p>
            <button className="bg-red-600 rounded-3xl w-[150px] h-[45px] font-semibold text-white uppercase">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
