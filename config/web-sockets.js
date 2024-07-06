import io from "socket.io-client";
let STRAPI_ENDPOINT;

if (process.env.NODE_ENV !== "production") {
  // STRAPI_ENDPOINT = 'http://localhost:1337';
  STRAPI_ENDPOINT = "https://ayna-backend-04qn.onrender.com";
} else {
  STRAPI_ENDPOINT = "https://ayna-backend-04qn.onrender.com";
}

export const socket = io(STRAPI_ENDPOINT);
