# SkyMate WeatherApp
A responsive and modern weather application built with React and Tailwind CSS. The app allows users to search for the current weather in any city, displays weather information for popular cities by default, and provides details like temperature, humidity, and wind speed.

# Features
-Dynamic Weather Search: Search for the current weather of any city.
-Default Weather Cards: Displays weather information for popular cities upon loading.
-Responsive Design: Fully responsive across mobile, tablet, and desktop devices.
-API Integration: Fetches real-time weather data using the OpenWeather API.
-Navigation: Includes Home, About, and Contact pages with React Router.

# Installation and Setup
# Prerequisites: Ensure you have the following installed on your system:
 
-Node.js (v14 or above)
-npm (or yarn)
-A Vite React app setup

# Steps
# Clone the repository:

git clone https://github.com/your-username/weather-app.git  

cd weather-app  

# Install dependencies:

npm install  

# Add environment variables:

-Create a .env file in the root directory.
-Add the following line:
 
VITE_API_KEY=your_openweather_api_key 

# Start the development server:

npm run dev  

# Open the app in your browser:
Navigate to http://localhost:3000 (or the port specified in your terminal).

# Usage
-Navigate through the app using the navigation bar.
-On the Home page, search for the weather in a specific city using the search bar.
-View weather cards for default cities like New York, London, and Paris.
-Visit the About page to learn more about the app.
-Contact information is available on the Contact page.

# Technologies Used
-Frontend: React.js (Vite setup)
-Styling: Tailwind CSS
-Routing: React Router
-HTTP Requests: Axios
-Environment Variables: dotenv (for securely handling API keys)
-Icons: Lucide (for adding high-quality, customizable icons)
-API: OpenWeather API

# Folder Structure
The project follows the default Vite React structure with additional folders for components and pages.

src/  
├── components/  
│   ├── CardSection.jsx  
|   ├──
│   ├── AboutContent.jsx  
│   ├── Footer.jsx  
│   ├── HomeWeatherCards.jsx  
│   ├── Navbar.jsx  
│   ├── SearchBar.jsx  
│   ├── WeatherCard.jsx  
│   ├── WeatherContainer.jsx  
├── pages/  
│   ├── Home.jsx  
│   ├── About.jsx  
│   ├── Contact.jsx  
└── main.jsx  
public/  
├── assets/ (contains custom images and icons)

# Future Enhancements
Dynamic Routing: Implement individual pages for each weather card to display detailed weather information, including hourly or daily forecasts.
