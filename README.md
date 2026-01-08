# WTWR (What to Wear)

## About the Project
"What to Wear" is a web application that helps users decide what clothing to pick based on the current weather in their specific location. The app fetches real-time weather data from the OpenWeather API and suggests appropriate outfits (Hot, Warm, or Cold).

## Functionality
- **Dynamic Weather Header**: Displays the current date and location.
- **Weather Card**: Shows the current temperature and a dynamic background that changes based on weather conditions (sunny, cloudy, rain, etc.) and time of day (Day/Night).
- **Clothing Suggestions**: Filters and displays clothing items based on the current temperature "type".
- **Modals**: Includes a functional "Add Garment" modal and an "Item Preview" modal for viewing specific clothing details.

## Technologies and Techniques
- **React**: Functional components and Hooks (`useState`, `useEffect`).
- **Vite**: Used for project bundling and fast HMR.
- **OpenWeather API**: Used to fetch live weather data.
- **CSS**: Structured using component-based folders and a clean naming convention.
- **JavaScript (ES6)**: Modular utility functions for API calls and data filtering.

## How to Run
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the project using `npm run dev`.