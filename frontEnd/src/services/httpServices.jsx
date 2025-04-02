const IP = "127.0.0.1"
const PORT = "3000"
const USER_RESOURCE = "/api/user"
const PRODUCT_RESOURCE = "/api/product"

const token = import.meta.env.VITE_TOKEN;
import Cookies from "js-cookie";
//const token = Cookies.get("token");
const httpservice = {
    login: (data) => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}/login`
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    },
    getUsers: () => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}`
        console.log(token);
        return fetch(SERVER_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }


        })

    },

    createUser: (newUser) => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}`;
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(newUser),
        });
    },

    updateUser: (user, userID) => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}/${userID}`;
        return fetch(SERVER_URL, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        });
    },

    deleteUser: (userID) => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}/${userID}`;
        return fetch(SERVER_URL, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
    },


    getProducts: () => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}`;
        return fetch(SERVER_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Inclua o token, se necessário
            },
        });
    },


    createProduct: (newProduct) => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}`;
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(newProduct),
        })

    }


}



export default httpservice;