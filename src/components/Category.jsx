import React, { useEffect, useState } from 'react';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export default function Category() {
  const [slide, setSlide] =  useState(0);
  const [foods, setFoods] = useState([]);

  const fetchFood = async () => {
    try {
      const response = await fetch("http://localhost:3001/foods");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const nextSlide = () => {
    if (foods.length - 8 === slide) return;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 3);
  };

  return (
    <div className='max-w-[1200px] mx-auto px-2 relative'>
      <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex'>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmLeft onClick={prevSlide}/></div>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmRight onClick={nextSlide} /></div>
        </div>
      </div>
      <div className='flex overflow-hidden relative z-0'>
        {foods.map((cat, index) => (
          <div className='w-[150px] flex-shrink-0 duration-500' key={index} style={{ transform: `translateX(-${slide * 100}%)` }}>
            <img
              src={`http://localhost:3001/${cat.image}`}
              alt={cat.path}
              style={{ maxWidth: '100%', height: 'auto', position: 'relative', zIndex: 10 }}
              onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-path"; }}
            />
          </div>
        ))}
      </div>
      <hr className='my-6 border-[1px]'/>
    </div>
  );
}
