# WTWR (What to Wear)

## Links to Projects
* **Backend Repository**: https://github.com/Raquel-LT3/se_project_express.git
* **Frontend Repository**: https://github.com/Raquel-LT3/se_project_react.git

---

## About the Project
**WTWR (What to Wear)** is a web application that helps users decide what clothing to wear based on the current weather in their location. The app fetches real-time weather data from the **OpenWeather API** and suggests appropriate outfits depending on whether the weather is **Hot**, **Warm**, or **Cold**.

---

## Functionality
* **Dynamic Weather Header**: Displays the current date and user location.
* **Weather Card**: Shows the current temperature with a dynamic background that changes based on weather conditions and time of day (Day/Night).
* **Clothing Suggestions**: Filters and displays clothing items based on the current temperature type.
* **Modals**: Includes an **Add Garment Modal**, **Item Preview Modal**, **Edit Profile Modal**, and **Confirmation Modal**.
* **User Authentication**: Allows users to register, log in, and manage their personal wardrobe and profile data.
* **Like/Unlike Logic**: Authorized users can like or unlike specific clothing items.

---

## Technologies and Techniques
* **React**: Functional components and Hooks (`useState`, `useEffect`, `useContext`) and Protected Routes.
* **Express.js**: Custom backend server for handling user data and clothing items.
* **MongoDB & Mongoose**: Database management for users and wardrobe collections.
* **JWT & Bcrypt**: Secure authorization and password hashing for user security.
* **Vite**: Project bundling and fast Hot Module Replacement (HMR).
* **OpenWeather API**: Fetches live weather data.
* **CSS**: Component-based folder structure following Figma designs, including circular avatar placeholders (40 x 40px).

---

## How to Run the Project
This project requires **both the frontend and the custom backend server** to be running at the same time.

### 1. Setup the Backend
Clone the [backend repository](https://github.com/Raquel-LT3/se_project_express.git). In the backend folder, run `npm install` and then `npm run dev` to start the server on port 3001. Ensure MongoDB is running on your machine.

### 2. Setup the Frontend
Clone the [frontend repository](https://github.com/Raquel-LT3/se_project_react.git). In the frontend folder, run `npm install` to install dependencies.

### 3. Start the Frontend
In your main terminal window, run:
`npm run dev`

### 4. Open the App
Visit the app in your browser at: http://localhost:3000