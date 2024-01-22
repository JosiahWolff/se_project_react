import sunnyday from "../images/weatherCards/sunny-day.svg";
import cloudyday from "../images/weatherCards/cloudy-day.svg";
import foggyday from "../images/weatherCards/foggy-day.svg";
import rainyday from "../images/weatherCards/rainy-day.svg";
import snowyday from "../images/weatherCards/snowy-day.svg";
import stormyday from "../images/weatherCards/stormy-day.svg";

import clearnight from "../images/weatherCards/clear-night.svg";
import cloudynight from "../images/weatherCards/cloudy-night.svg";
import foggynight from "../images/weatherCards/foggy-night.svg";
import rainynight from "../images/weatherCards/rainy-night.svg";
import snowynight from "../images/weatherCards/snowy-night.svg";
import stormynight from "../images/weatherCards/stormy-night.svg";

export const weatherOptions = [
  { url: sunnyday, day: true, type: "sunny" },
  { url: cloudyday, day: true, type: "cloudy" },
  { url: foggyday, day: true, type: "foggy" },
  { url: rainyday, day: true, type: "rainy" },
  { url: snowyday, day: true, type: "snowy" },
  { url: stormyday, day: true, type: "stormy" },

  { url: clearnight, day: false, type: "clear" },
  { url: cloudynight, day: false, type: "cloudy" },
  { url: foggynight, day: false, type: "foggy" },
  { url: rainynight, day: false, type: "rainy" },
  { url: snowynight, day: false, type: "snowy" },
  { url: stormynight, day: false, type: "stormy" },
];
