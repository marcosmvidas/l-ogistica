import axios from "axios";

export const Cliente = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const Entrega = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND,
});