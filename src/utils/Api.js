const baseUrl = "http://localhost:3001";

export function serverResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Error: ${res.status}`);
  }
}

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(serverResponse);
}

export const postItems = ({ name, imageUrl, weather }) =>
  fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(serverResponse);

export const deleteItems = (cardid) =>
  fetch(`${baseUrl}/items/${cardid}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  }).then(serverResponse);
