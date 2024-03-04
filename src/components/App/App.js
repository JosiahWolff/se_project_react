import "./App.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// Modal Imports
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteItem from "../DeleteModal/DeleteModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
//Context Imports
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// Utils Imports
import { login, update, register, checkToken } from "../../utils/auth.js";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import {
  getItems,
  postItems,
  deleteItems,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import * as auth from "../../utils/auth";
// React Imports
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const history = useHistory("");
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenEditProfileModal = () => {
    setActiveModal("edit");
  };

  const registerUser = (values) => {
    register(values)
      .then(() => {
        handleCloseModal();
        loginUser(values);
      })
      .catch((e) => {
        console.error(`${e}`);
      });
  };

  const loginUser = (user) => {
    setIsLoading(true);
    login(user)
      .then((res) => {
        handleCloseModal();
        localStorage.setItem("jwt", res.data);
        console.log("Token set:", res.data);
        setLoggedIn(true);
        setCurrentUser(res.user);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateUser = (values) => {
    const jwt = localStorage.getItem("jwt");
    update(values, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((e) => {
        console.error(`${e}`);
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  };

  const handleDeleteCard = () => {
    const id = selectedCard._id;
    deleteItems(id)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== id));
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCardLike = (id) => {
    if (isLiked) {
      addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard.data : c))
          );
          setIsLiked(true);
        })
        .catch((err) => console.log(err));
    } else {
      removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard.data : c))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    setIsLoading(true);
    postItems(values)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to add clothing item due to: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.user);
        })
        .catch((error) => {
          console.error("Error checking token:", error);
          localStorage.removeItem("jwt");
          setLoggedIn(false);
        });
    }
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setLocation(data.name);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => console.log(err));
    getItems()
      .then((data) => setClothingItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          location={location}
          temp={temp}
          onCreateModal={handleCreateModal}
          loggedIn={loggedIn}
          onLogin={handleOpenLoginModal}
          onRegister={handleOpenRegisterModal}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCreateModal={handleCreateModal}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
              editProfile={handleOpenEditProfileModal}
              logout={logoutUser}
            />
          </Route>
        </Switch>

        {activeModal === "login" && (
          <LoginModal onClose={handleCloseModal} loginUser={loginUser} />
        )}

        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            registerUser={registerUser}
            openLoginModal={handleOpenLoginModal}
          />
        )}

        <Footer />

        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
            isLoading={isLoading}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteCard}
          />
        )}

        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            updateUser={updateUser}
          />
        )}

        {activeModal === "delete" && (
          <DeleteItem
            onClose={handleCloseModal}
            handleDeleteCard={() => {
              handleDeleteCard(selectedCard);
            }}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
