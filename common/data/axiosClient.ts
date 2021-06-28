import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    common: {
      Authorization: undefined,
    },
  },
});

export function setAuthToken(token: string) {
  axiosClient.defaults.headers.common["Authorization"] = "Token " + token;
  try {
    localStorage.setItem("token", token);
  } catch (e) {
    console.log("Error when setting auth token: " + e);
  }
}

export function retrieveAuthToken() {
  setAuthToken(localStorage.getItem("token"));
}

export function removeAuthToken() {
  axiosClient.defaults.headers.common["Authorization"] = undefined;
  localStorage.removeItem("token");
}
