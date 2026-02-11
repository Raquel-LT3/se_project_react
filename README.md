# WTWR (What to Wear)

##  Live Project
- **Deployed Site:** [https://clothing-app-2026.thedesktop.com](https://clothing-app-2026.thedesktop.com)
- **Backend API:** [https://api.clothing-app-2026.thedesktop.com](https://api.clothing-app-2026.thedesktop.com)

---

## About the Project
WTWR (What to Wear) is a React-based application that helps users decide what clothing to wear based on real-time weather data. The app integrates with the 
**OpenWeather API** and suggests appropriate outfits from the user's personal wardrobe based on temperature ranges (Hot, Warm, or Cold).

---

## Functionality

- **Dynamic Weather Header**: Displays the current date and user location.
- **Weather Card**: Shows the current temperature with a dynamic background that changes based on weather conditions and time of day (Day/Night).
- **Clothing Suggestions**: Filters and displays clothing items based on the current temperature type.
- **Modals**: Includes an **Add Garment Modal**, **Item Preview Modal**, **Edit Profile Modal**, and **Confirmation Modal**.
- **User Authentication**: Allows users to register, log in, and manage their personal wardrobe and profile data.
- **Like/Unlike Logic**: Authorized users can like or unlike specific clothing items.

---

## Technologies and Techniques

- **React**: Functional components and Hooks (`useState`, `useEffect`, `useContext`) and Protected Routes.
- **Express.js**: Custom backend server for handling user data and clothing items.
- **MongoDB & Mongoose**: Database management for users and wardrobe collections.
- **JWT & Bcrypt**: Secure authorization and password hashing for user security.
- **Vite**: Project bundling and fast Hot Module Replacement (HMR).
- **OpenWeather API**: Fetches live weather data.
- **CSS**: Component-based folder structure following Figma designs, including circular avatar placeholders (40 x 40px).

---

## 🔗 Backend Repository
[https://github.com/Raquel-LT3/se_project_express](https://github.com/Raquel-LT3/se_project_express)

---

## 🛠️ How to Run Locally
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file and add `VITE_API_URL=http://localhost:3001` (for local development).
4. Start the development server: `npm run dev`.