import axios from "axios";

const app = axios.create({
    baseURL: "http://localhost:3004"
})

export default app