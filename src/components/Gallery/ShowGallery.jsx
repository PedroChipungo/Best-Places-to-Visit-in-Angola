import React, { useEffect, useState } from 'react';
import { GalleryImages } from './GalleryImage/GalleryImages';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowGallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [gallery] = useState(GalleryImages);

  const showMoreImages = () => {
    const remainingImages = gallery.length - visibleImages;
    const imagesToShow = Math.min(remainingImages, 6);
    setVisibleImages((prevVisibleImages) => prevVisibleImages + imagesToShow);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 100,
      delay: 50,
    });
  }, []);

  return (
    <div className="px-6 md:px-4 pt-20 bg-slate-100">
      <h1 data-aos="fade-up" className="text-center text-black font-bold text-4xl mb-12 tracking-wide">
        Gallery
      </h1>
      <ul data-aos="slide-up" className="md:grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-6">
        {gallery.slice(0, visibleImages).map(({ image, name }, index) => (
          <li key={index} className="w-full h-full flex flex-col gap-4">
            <img
              src={image}
              alt={`image of ${name}`}
              className="hover:scale-110 hover:brightness-75 transition-all duration-700 cursor-pointer w-full h-full object-cover shadow-xl"
            />
            <p className="font-bold">{name}</p>
          </li>
        ))}
      </ul>
      {visibleImages < gallery.length && (
        <div data-aos="slide-up" className="flex items-center justify-center">
          <button
            onClick={showMoreImages}
            className="shadow-2xl hover:bg-blue-400 duration-1000 transition-all border-0 self-center m-10 justify-center p-4 rounded-lg bg-blue-600 text-white font-bold"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowGallery;
