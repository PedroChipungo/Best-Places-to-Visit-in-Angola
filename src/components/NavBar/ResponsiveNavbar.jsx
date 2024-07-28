import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./NavBar";

const ResponsiveNavbar = ({ showMenu, setMenu}) => {
  return (
    <div className={`${
      showMenu ? "left-0" : "-left-[100%]"
    } fixed shadow-slate-800 bottom-0 top-0 z-20 flex h-[85%] w-[75%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-2 text-black
    transition-all duration-200 md:hidden rounded-r-xl }`}>
        <div className="NavBar_card">
        <div className="justify-center pt-12 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <Link to='/' className="text-3xl text-indigo-600 mr-1 pt-2">
              <img className='h-16 w-16 rounded-full '
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/640px-Flag_of_Angola.svg.png`} 
              alt="Angola`s Flag" />
            </Link>
        </div>
            <div className="text-black text-base mt-12 "> 
              <ul>
                {
                  NavbarLinks.map(({name,link}) => (
                    <li key={link}>
                      <Link to={link} onClick={() => setMenu(false)} 
                      className=' my-5 inline-block font-bold text-2xl  hover:text-teal-400'>{name}</Link>
             
                    </li>
                  ))
                  
                }
              </ul>
            </div>
        </div>
    </div>
  );
};

export default ResponsiveNavbar;
