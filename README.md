# WTWR (What to Wear)

## About the Project
**WTWR (What to Wear)** is a web application that helps users decide what clothing to wear based on the current weather in their location. The app fetches real-time weather data from the **OpenWeather API** and suggests appropriate outfits depending on whether the weather is **Hot**, **Warm**, or **Cold**.

---

## Functionality
- **Dynamic Weather Header**: Displays the current date and user location.
- **Weather Card**: Shows the current temperature with a dynamic background that changes based on weather conditions and time of day (Day/Night).
- **Clothing Suggestions**: Filters and displays clothing items based on the current temperature type.
- **Modals**: Includes an **Add Garment Modal** for adding new items and an **Item Preview Modal** for viewing details.

---

## Technologies and Techniques
- **React**: Functional components and Hooks (`useState`, `useEffect`).
- **Vite**: Project bundling and fast Hot Module Replacement (HMR).
- **OpenWeather API**: Fetches live weather data.
- **CSS**: Component-based folder structure and consistent naming.
- **JavaScript (ES6)**: Modular utility functions and API filtering logic.

---

## How to Run the Project
This project requires **both the frontend and a mock backend server** to be running at the same time.

1. **Clone the Repository**
   git clone https://github.com/Raquel-LT3/se_project_react.git

2. **Install Dependencies**
   npm install

3. **Start the Mock API (json-server)**
   In a separate terminal window, run the following command to start the database on port 3001:
   npx json-server@0.17.4 --watch db.json --id _id --port 3001

4. **Start the Frontend**
   In your main terminal window, run:
   npm run dev

5. **Open the App**
   Visit the app in your browser at: http://localhost:5173