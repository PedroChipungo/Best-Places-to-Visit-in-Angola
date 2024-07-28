import React, { useEffect, useState } from 'react'
import { WondersImages } from './SevenWondersimages/SevenWondersImages'
import AOS from 'aos'
import 'aos/dist/aos.css';

const SevenWonders = () => {
    const [sevenWonders] = useState(WondersImages)
    useEffect(() => {
        AOS.init({
          duration: 2000, // duração da animação em milissegundos
          easing: 'ease-in-out',
          offset: 100,
          delay: 100,
          // once: true,     // se a animação deve acontecer apenas uma vez
        });
      }, []);
  return (
    <div className='px-12 pt-32 text-center'>

        <h1 data-aos="fade-up" className='text-black font-bold 
        text-3xl tracking-widest mb-6 md:mb-20'>The Seven Angola`s Wonders
        </h1>

        <ul  className='flex w-100 flex-col mb-12'>
                {
                    sevenWonders.map(({image,name,description}, index) =>(
                        <li data-aos="slide-up" className='lg:flex md:block items-center gap-6 md:gap-8 justify-center my-8' key={index}>
                            <img src={image} alt={`image of ${name}`} className='hover:scale-110 hover:brightness-75 transition-all duration-700 cursor-pointer mb-10 shadow-2xl lg:h-full lg:w-1/2'/>
                            <div className='px-4'> 
                              <p className='mb-5 text-start font-bold text-2xl'>{name}</p>
                              <p className='text-start text-xl lg:pr-38'>{description}</p>
                            </div>
                        </li>
                    ))
                }
        </ul>

    </div>
  )
}

export default SevenWonders
