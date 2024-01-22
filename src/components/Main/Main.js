import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "C" ? weatherTemp.C : weatherTemp.F;

  const tempF = weatherTemp.F;

  const weatherType = useMemo(() => {
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main>
      <WeatherCard day={false} type="clear" weatherTemp={temperature} />
      <section className="main__section" id="clothing-card-section">
        <p className="itemCard__description">
          Today is {temperature}°{currentTemperatureUnit} / You may want to
          wear:
        </p>
        <div className="card_items">
          {filteredCards.map((item, index) => {
            return (
              <ItemCard
                key={item.id}
                item={item}
                onSelectCard={onSelectCard}
                link={item.link}
                name={item.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
