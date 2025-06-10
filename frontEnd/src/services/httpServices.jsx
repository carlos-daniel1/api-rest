import Cookies from "js-cookie";

const IP = import.meta.env.VITE_BACKEND_IP
const PORT = 80
const USER_RESOURCE = "/api/user"
const PRODUCT_RESOURCE = "/api/product"


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
        
        return fetch(SERVER_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`
            }


        })

    },

    createUser: (newUser) => {
        const SERVER_URL = `http://${IP}:${PORT}${USER_RESOURCE}`;      
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
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
                "Authorization": `Bearer ${Cookies.get("token")}`,
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
                "Authorization": `Bearer ${Cookies.get("token")}`,
            },
        });
    },


    getProducts: () => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}`;
        return fetch(SERVER_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`, 
            },
        });
    },


    createProduct: (newProduct) => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}`;
        return fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify(newProduct),
        })

    },

    updateProduct: (productID, newProduct) => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}/${productID}`;
        return fetch(SERVER_URL, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify(newProduct),
        })

    },

    deleteProduct: (productID) => {
        const SERVER_URL = `http://${IP}:${PORT}${PRODUCT_RESOURCE}/${productID}`;
        return fetch(SERVER_URL, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`,
            }
        })

    }




}



export default httpservice;