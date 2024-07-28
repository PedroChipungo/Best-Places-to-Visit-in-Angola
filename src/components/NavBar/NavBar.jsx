import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Popular Places",
    link: "/mostPopularPlaces",
  },
  {
    name: "Gallery",
    link: "/showGallery",
  },
  {
    name: "7 Wonders",
    link: "/sevenWonders",
  },
  // {
  //   name: "About",
  //   link: "/about",
  // },

];

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [showMenu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!showMenu)
};

  return (
    <nav className="md:fixed shadow-md w-full top-0 left-0 z-[99999]">
      <div className="flex justify-between items-center bg-white py-2 px-10">
        <div className="opacity-55 text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <Link to='/'  onClick={() => window.scrollTo(0, 0)} className="text-3xl text-indigo-600 mr-1 pt-2">
              <img className='h-12 w-12 rounded-full'
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/640px-Flag_of_Angola.svg.png`} 
              alt="Angola`s Flag" />
            </Link>
        </div>

        <div  className="md:hidden text-5xl cursor-pointer right-8 top-6 absolute">
        <ion-icon onClick={toggleMenu} name='menu'></ion-icon>
        </div>
        <ResponsiveNavbar setMenu={setMenu} showMenu={showMenu}/>
        <ul className={`md:flex items-center pb-0 static left-0 w-auto pl-0 hidden`}>
          {
            NavbarLinks.map(({name, link}) => (
                  <li key={name} className="ml-8 text-2xl my-0">
                    <NavLink to={link} className="active">{name}</NavLink>
                  </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
