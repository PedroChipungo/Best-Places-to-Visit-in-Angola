import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PopularImages from '../../assets/popularPlaces/Popular';
import AOS from 'aos'
import 'aos/dist/aos.css';

const MostPopularPlaces = () => {
  const {image, name} = PopularImages
  useEffect(() => {
    AOS.init({
      duration: 2000, // duração da animação em milissegundos
      easing: 'ease-in-out',
      offset: 100,
      delay: 50,
      // once: true,     // se a animação deve acontecer apenas uma vez
    });
  }, []);

  return (
    <div className="pt-32 px-4 bg-slate-100 ">
      <h1 data-aos='fade-up' className='text-black font-bold text-center text-4xl py-12 pl-4 lg:p-12'>{name}</h1>

          <div data-aos='slide-up' className="flex flex-col p-1">
            <img src={image} className="w-full h-auto" />
          </div>
          <p className='text-xl p-4 lg:pr-96'>
         
Here we have an image highlighting the most visited tourist attractions in Angola.
 For more information about these incredible sites, click on 
 <NavLink to={'/sevenWonders'}><span className='hover:cursor-pointer text-teal-600 font-bold'>7 Wonders</span></NavLink>.
 There, you can explore detailed descriptions, stunning photos, and travel tips. Discover the rich history, 
 diverse wildlife, and breathtaking landscapes of these destinations. Who knows, 
it might even inspire you to plan a visit and experience the beauty of Angola firsthand.</p>
    
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {places.slice(0, 4).map(({ url, title }, index) => (
          <div key={index} className="flex flex-col p-1">
            <img src={url} alt={title} className="w-full h-auto" />
            <p className="text-xl font-bold text-black">{title}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {places.slice(4).map(({ url, title }, index) => (
          <div key={index} className="flex flex-col  p-1">
            <img src={url} alt={title} className="w-full h-auto" />
            <p className="text-xl font-bold text-black">{title}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MostPopularPlaces;
