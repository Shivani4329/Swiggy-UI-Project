import React from 'react';

const cuisines = [
  "Chinese Restaurant Near Me",
  "South Indian Restaurant Near Me",
  "Indian Restaurant Near Me",
  "Kerala Restaurant Near Me",
  "Korean Restaurant Near Me",
  "North Indian Restaurant Near Me",
  "Seafood Restaurant Near Me",
  "Bengali Restaurant Near Me",
  "Punjabi Restaurant Near Me",
  "Italian Restaurant Near Me",
  "Andhra Restaurant Near Me",
  "Biryani Restaurant Near Me",
  "Japanese Restaurant Near Me",
  "Arabian Restaurant Near Me",
  "Fast Food Restaurant Near Me",
  "Jain Restaurant Near Me",
  "Gujarati Restaurant Near Me",
  "Thai Restaurant Near Me",
  "Pizzas Restaurant Near Me",
  "Asian Restaurant Near Me",
  "Cafe Restaurant Near Me",
  "Continental Restaurant Near Me",
  "Mexican Restaurant Near Me",
  "Mughlai Restaurant Near Me",
  "Sushi Restaurant Near Me",
  "Mangalorean Restaurant Near Me",
  "Tibetan Restaurant Near Me",
  "Barbecue Restaurant Near Me",
  "Maharashtrian Restaurant Near Me",
  "Nepalese Restaurant Near Me",
  "Rajasthani Restaurant Near Me",
  "Turkish Restaurant Near Me"
];

const BestCuisinesNearMe = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">Best Cuisines Near Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {cuisines.map((cuisine, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <a href="#" className="text-base text-gray-800 font-medium hover:text-orange-500 transition-colors duration-200">{cuisine}</a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default BestCuisinesNearMe;
