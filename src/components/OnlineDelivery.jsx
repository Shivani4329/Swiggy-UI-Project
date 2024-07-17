import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
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
  return (
    <div className='max-w-[1200px] mx-auto px-2'>
      <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurants with online food delivery in Delhi</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                restaurantChains.map(
                    (d,i) => {
                        return <Card {...d}/>
                    }
                )
            }
        </div>
        <hr className='my-4 border-[1px]'/>
      </div>

  )
}
