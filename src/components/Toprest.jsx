import React, { useEffect, useState } from 'react';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import Card from './Card';

export default function TopRest() {
  const [slide, setSlide] = useState(0);
  const [restaurantChains, setRestaurantChains] = useState([]);

  useEffect(() => {
    const fetchRestaurantChains = async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurantchains');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRestaurantChains(data);
      } catch (error) {
        console.error('Error fetching restaurant chains:', error);
      }
    };

    fetchRestaurantChains();
  }, []);

  const nextSlide = () => {
    if (slide < restaurantChains.length - 4) {
      setSlide(slide + 2);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 2);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto px-2'>
      <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Top restaurant chains in Delhi</div>
        <div className='flex'>
          <div
            className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={prevSlide}
          >
            <HiArrowSmLeft />
          </div>
          <div
            className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={nextSlide}
          >
            <HiArrowSmRight />
          </div>
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden'>
        {restaurantChains.slice(slide, slide + 4).map((restaurant, index) => (
          <Card width = "w-full md:w-[273px]"
            key={index}
            image={restaurant.image}
            offer={restaurant.offer}
            title={restaurant.title}
            rating={restaurant.rating}
            minTime={restaurant.minTime}
            maxTime={restaurant.maxTime}
            name={restaurant.name}
            place={restaurant.place}
          />
        ))}
      </div>
      <hr className='my-4 border-[1px]'/>
    </div>
  );
}
