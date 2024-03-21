import { checkResponse } from "./Api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrByJosiah3311.crabdance.com"
    : "http://localhost:3001";

const baseHeaders = { "Content-Type": "application/json" };

export const register = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const update = ({ name, avatar }, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const getUserData = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
