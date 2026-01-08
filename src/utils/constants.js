// src/utils/constants.js

import daySunny from "../images/Day-Sunny.svg";
import nightSunny from "../images/Night-Sunny.svg";
import dayCloudy from "../images/Day-Cloudy.svg";
import nightCloudy from "../images/Night-Cloudy.svg";
import dayRain from "../images/Day-Rain.svg";
import nightRain from "../images/Night-Rain.svg";
import daySnow from "../images/Day-Snow.svg";
import nightSnow from "../images/Night-Snow.svg";
import dayStorm from "../images/Day-Storm.svg";
import nightStorm from "../images/Night-Storm.svg";
import dayFog from "../images/Day-Fog.svg";
import nightFog from "../images/Night-Fog.svg";

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
  { url: dayFog, day: true, condition: "haze" },
  { url: nightFog, day: false, condition: "haze" },
  { url: dayFog, day: true, condition: "mist" },
  { url: nightFog, day: false, condition: "mist" },
];

export const apiKey = "e2161887eb11b09a7df34ef597dff325";
export const latitude = "40.7128";
export const longitude = "-74.0060";