const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route to display weather data
app.get('/', async (req, res) => {
  const city = req.query.city || 'London';  // Default to London
  const apiKey = '071083bdd764ed833e072710953e2904'; // Replace with your API key

  try {
    // Fetch weather data from OpenWeatherMap API
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;
    res.render('index', { weatherData, city });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.render('index', { error: 'Could not fetch weather data. Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Weather app is running at http://localhost:${port}`);
});

