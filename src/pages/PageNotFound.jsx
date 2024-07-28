import React from 'react';
import { NavLink, Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-60'>
      <div className='flex flex-col items-center justify-center mb-16 text-red-600 text-2xl'>
      <h1 >404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      </div>
     
      <NavLink to={'/'}><span className='cursor-pointer text-black font-bold text-2xl'>Go to Home</span></NavLink>
    </div>
  );
};

export default PageNotFound;
