import io from "socket.io-client";

// const STRAPI_ENDPOINT = 'http://localhost:1337';
const STRAPI_ENDPOINT = "https://ayna-backend-04qn.onrender.com";
export const socket = io(STRAPI_ENDPOINT);
