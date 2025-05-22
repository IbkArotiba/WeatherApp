# Weather App

A beautiful and responsive weather application built with React that shows real-time weather information with dynamic backgrounds based on weather conditions.

## Features

- Real-time weather data from OpenWeatherMap API
- Dynamic backgrounds that change based on weather conditions
- Loading states and error handling
- Responsive design
- Search for any city worldwide
- Displays temperature, humidity, and wind speed
- Beautiful UI with weather-appropriate gradients

## Technologies Used

- React + Vite
- OpenWeatherMap API
- CSS3 with dynamic gradients
- Environment variables for secure API key storage

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/IbkArotiba/WeatherApp.git
   cd WeatherApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Getting an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Create an account and sign in
3. Go to your API keys section
4. Copy your API key and paste it in the `.env` file

## Usage

- The app shows weather for New Jersey by default
- Type a city name in the search bar and press Enter or click the search icon
- The background will change based on the current weather condition
- Loading indicator shows while fetching weather data
- Error message displays if city is not found

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
