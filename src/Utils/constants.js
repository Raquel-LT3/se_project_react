// src/utils/constants.js

// src/Utils/constants.js
import daySunny from "../Assets/Day-Sunny.svg";
import nightSunny from "../Assets/Night-Sunny.svg";
import dayCloudy from "../Assets/Day-Cloudy.svg";
import nightCloudy from "../Assets/Night-Cloudy.svg";
import dayRain from "../Assets/Day-Rain.svg";
import nightRain from "../Assets/Night-Rain.svg";
import daySnow from "../Assets/Day-Snow.svg";
import nightSnow from "../Assets/Night-Snow.svg";
import dayStorm from "../Assets/Day-Storm.svg";
import nightStorm from "../Assets/Night-Storm.svg";
import dayFog from "../Assets/Day-Fog.svg";
import nightFog from "../Assets/Night-Fog.svg";

export const weatherOptions = [
  { url: daySunny, day: true, condition: "clear" },
  { url: nightSunny, day: false, condition: "clear" },
  { url: dayCloudy, day: true, condition: "clouds" },
  { url: nightCloudy, day: false, condition: "clouds" },
  { url: dayRain, day: true, condition: "rain" },
  { url: nightRain, day: false, condition: "rain" },
  { url: daySnow, day: true, condition: "snow" },
  { url: nightSnow, day: false, condition: "snow" },
  { url: dayStorm, day: true, condition: "thunderstorm" },
  { url: nightStorm, day: false, condition: "thunderstorm" },
  { url: dayFog, day: true, condition: "fog" },
  { url: nightFog, day: false, condition: "fog" },
];

export const APIkey = "e2161887eb11b09a7df34ef597dff325";
export const latitude = "40.7128";
export const longitude = "-74.0060";