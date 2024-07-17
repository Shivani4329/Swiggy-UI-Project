import React from 'react';

const restaurant = [
  "Explore Restaurants Near Me",
  "Explore Top Rated Restaurants Near Me"
];

const ExploreRestaurants = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">Explore Every Restaurants Near Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {restaurant.map((restaurant, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <a href="#" className="text-lg text-gray-800 font-medium hover:text-orange-500 transition-colors duration-200">{restaurant}</a>
          </div>
        ))}
      </div>
      <hr className='my-4 border-[1px]'/>
    </div>
  );
};

export default ExploreRestaurants;
