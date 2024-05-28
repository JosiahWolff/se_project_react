const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrbyjosiah3311.crabdance.com"
    : "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export function getItems() {
  const jwt = localStorage.getItem("jwt"); //get new token

  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkResponse);
}

export const postItems = ({ name, imageUrl, weather }) => {
  const jwt = localStorage.getItem("jwt"); //get new token

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(checkResponse);
};

export const deleteItems = (cardid) => {
  const jwt = localStorage.getItem("jwt"); //get new token

  return fetch(`${baseUrl}/items/${cardid}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkResponse);
};

export const addCardLike = (_id) => {
  const jwt = localStorage.getItem("jwt"); //get new token

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkResponse);
};

export const removeCardLike = (_id) => {
  const jwt = localStorage.getItem("jwt"); //get new token

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkResponse);
};
