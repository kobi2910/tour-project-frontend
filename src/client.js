import axios from "axios";
import { BaseUrl } from "./index.js";

export function getUser(token) {
    const url = BaseUrl + "account/get_user";
    return axios
        .get(url, {
            headers: {
                Authorization: `token: ${token}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else if (response.status === 401) {
                alert("user not found");
                console.log(response.data);
                return null;
            }
        });
}

export function checkToken(storedToken) {
    console.log("Checking token:", storedToken);
    const url = BaseUrl + "account/check_token/";
    return axios
        .get(url, {
            headers: {
                'content-type': 'application/json',
                Authorization: `token: ${storedToken}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                return true;
            } else if (response.status === 401) {
                alert("Token is invalid");
                console.log(response.data);
                return false;
            }
        })
        .catch((error) => {
            alert("Error checking token");
            console.error(error);
        });
}


