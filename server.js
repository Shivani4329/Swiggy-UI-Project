const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder

const data = {
  foods: [
    { "image": "Images/North Indian.avif", "path": "north indian" },
    { "image": "Images/Pizza.avif", "path": "pizza" },
    { "image": "Images/Noodles.avif", "path": "noodles" },
    { "image": "Images/Pasta.avif", "path": "pasta" },
    { "image": "Images/Paratha.avif", "path": "paratha" },
    { "image": "Images/Biryani.avif", "path": "biryani" },
    { "image": "Images/Burger.avif", "path": "burger" },
    { "image": "Images/Cake.avif", "path": "cake" },
    { "image": "Images/Chinese.avif", "path": "chinese" },
    { "image": "Images/Momos.avif", "path": "momos" },
    { "image": "Images/Dosa.avif", "path": "dosa" },
    { "image": "Images/Pastry.avif", "path": "pastry" },
    { "image": "Images/IceCream.avif", "path": "icecream" },
    { "image": "Images/Kebabs.avif", "path": "kebabs" },
    { "image": "Images/Shawarma.avif", "path": "shawarma" },
    { "image": "Images/Pureveg.avif", "path": "pureveg" },
    { "image": "Images/Rolls.avif", "path": "rolls" },
    { "image": "Images/Salad.avif", "path": "salad" },
    { "image": "Images/SouthIndian.avif", "path": "southindian" },
    { "image": "Images/Rasmalai.avif", "path": "rasmalai" }
  ],
  restaurantchains: [
    { "image": "Images/Pizza1.avif", "offer": "Items at ₹179", "title": "Pizza Hut", "rating": 4.2, "minTime": 30, "maxTime": 40, "name": "Pizzas", "place": "New Jodhpur" },
    { "image": "Images/wowmomo.avif", "offer": "₹50 OFF ABOVE ₹199", "title": "Wow! Momo", "rating": 4.5, "minTime": 35, "maxTime": 40, "name": "Tibetan Momo", "place": "Pandav Nagar" },
    { "image": "Images/chinesewok.avif", "offer": "ITEMS AT ₹149", "title": "Chinese Wok", "rating": 4.3, "minTime": 35, "maxTime": 40, "name": "Chines,Asian,Tibetan", "place": "Mayur Vihar" },
    { "image": "Images/Burgerking.avif", "offer": "ITEMS AT ₹129", "title": "Burger King", "rating": 4.5, "minTime": 25, "maxTime": 25, "name": "Burgers,American", "place": "Mayur Vihar" },
    { "image": "Images/subway.avif", "offer": "Items at ₹159", "title": "Subway", "rating": 4.4, "minTime": 30, "maxTime": 35, "name": "Salads,Snacks,Beverages", "place": "Mayur Vihar" },
    { "image": "Images/cheesecake.avif", "offer": "₹100 OFF ABOVE ₹199", "title": "Cheesecake & Co.", "rating": 4.7, "minTime": 25, "maxTime": 30, "name": "Bakery,Desserts", "place": "Sector 15" },
    { "image": "Images/homemeal.avif", "offer": "Items at ₹109", "title": "Daily Kitchen - Meals", "rating": 4.0, "minTime": 35, "maxTime": 40, "name": "Home Food,Indian,North Indian", "place": "Mayur Vihar Phase1" },
    { "image": "Images/kulfi.avif", "offer": "50% OFF UPTO ₹90", "title": "Grameen Kulfi", "rating": 4.3, "minTime": 30, "maxTime": 35, "name": "Ice Cream, Desserts", "place": "Shastri Nagar" },
    { "image": "Images/mcd.avif", "offer": "₹70 OFF ABOVE ₹159", "title": "McDonald's", "rating": 4.4, "minTime": 30, "maxTime": 35, "name": "American", "place": "Lakmi Nagar" },
    { "image": "Images/iceCream1.avif", "offer": "₹30 OFF ABOVE ₹90", "title": "Baskin Robbins - Ice Cream", "rating": 4.5, "minTime": 35, "maxTime": 40, "name": "Ice Cream, Desserts", "place": "Mayur Vihar" }
  ]
};

app.get('/foods', (req, res) => {
  res.json(data.foods);
});

app.get('/restaurantchains', (req, res) => {
  res.json(data.restaurantchains);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001/');
});
